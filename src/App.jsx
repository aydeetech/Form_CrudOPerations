import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Read from './components/Read'
import Update from './components/Update'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element ={<Read />} />
          <Route path='/update/:UserId' element ={<Update />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
