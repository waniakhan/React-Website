import axios from 'axios';
import React, { useContext, useState } from 'react'
import {GlobalContext} from '../context/context'
import Cookies from 'js-cookie'

export default function Guest() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {state,dispatch} = useContext(GlobalContext)



  const LoginUser = (e) => {
    e.preventDefault();
    const payload = { email, password }
    console.log(payload)
    axios.post('http://localhost:5800/api/login',payload)
    .then((json)=>{

Cookies.set('token', json.data.token)

      dispatch({
      type: "Login",
      token: json.data.token
    })
    })
    .catch((error)=>console.log(error.message))
  }

  return (
    <div className="container">
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '100%' }}>
        <div className='p-5 bg-dark rounded text-white'>
          <form onSubmit={LoginUser}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}
