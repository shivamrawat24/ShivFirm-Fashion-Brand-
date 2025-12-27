import React from 'react'
import '../UserLogin/UserLogin.css'

function UserLogin() {
  return (
    <div className='login-signup'>
        <div className="left-container">
          <p>Login or Sign up with us and be a part of our family <br />
          Get time to time discount vouchers or <br />cash prizes  with us...

          </p>
        </div>
        <hr />
        <div className="signup-container">
          <input type="Email" placeholder='Enter your Username'/> <br />
          <input type="password" placeholder='Enter your Password' /> <br />
          <button>Login</button>
          <p><a href="#">forget password ?</a>
          <br /><br />
          Click here for <a href="#">Sign-Up!</a>
          </p>
          
        </div>
      {/* <h1>This is login page</h1> */}
    </div>
  )
}

export default UserLogin
