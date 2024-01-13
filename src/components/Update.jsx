import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Update = () => {
  const { UserId } = useParams();
  const [user, setUser] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const FetchData = async () => {
    const { data } = await axios(
      `https://659e94f147ae28b0bd363aad.mockapi.io/user/${UserId}`
    );
    setFirstName(data.firstname)
    setLastName(data.lastname)
    setCheckbox(data.checkbox)
    console.log(data);
  };

  const updateInfo = (e) => {
    e.preventDefault();
    axios.put(`https://659e94f147ae28b0bd363aad.mockapi.io/user/${UserId}`,{
    firstname,
    lastname,
    checkbox}
    )
  }

  useEffect(() => {
    FetchData();
  }, [UserId]);
  return (
    <div className="container">
      <h1>Updating {firstname} {lastname} Info</h1>
      <section className="d-flex flex-column w-100 h-100">
        <div className="bg-primary-subtle w-100 container mt-5 p-2 rounded  ">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                className="w-100 "
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                checked= {checkbox ? "checked" : null}
                label="Agree to terms and conditions"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="align-self-center align"
              onClick={updateInfo}
            >
              Update
            </Button>
          </Form>
        </div>
        {/* <div className="d-flex w-100 justify-content-center ">
          <Link to="/users">
            <button className="btn btn-primary mt-5 ms-5">See All User</button>
          </Link>
        </div> */}
      </section>
    </div>
  );
};

export default Update;
