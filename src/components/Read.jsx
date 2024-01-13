import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Read = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const {data} = await axios("https://659e94f147ae28b0bd363aad.mockapi.io/user");
    setUsers(data);
  };

  const handleDelete =  (id) => {
    axios.delete(`https://659e94f147ae28b0bd363aad.mockapi.io/user/${id}`)
    getUser()
  }

  

  useEffect(() => {
    getUser()
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">List of Users</h2>
      <table className="table">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Second Name</td>
            <td>Agreement</td>
            <td className="text-center">Update</td>
            <td className="text-center">Delete</td>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            const { firstname, lastname, checkbox, id } = user;

            return <tr key={id}>
              <td>{firstname}</td>
              <td>{lastname}</td>
              <td>{checkbox ? "Agreed to terms and conditions" : "Did not agree to terms and conditions"}</td>
              <td><Link to= {`/update/${id}`}><button className='btn btn-primary ms-5'>Update Info</button></Link></td>
              <td><button className='btn btn-primary ms-5' onClick={() => handleDelete(id)}>Delete</button></td>
              </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
