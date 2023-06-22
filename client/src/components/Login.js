import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import signin from '../images/login.avif';
const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '', password: ''
  })

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    const res = await fetch("https://creative-ninjas.onrender.com/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = await res.json();
    if (res.status === 401 || !data) {
      window.alert("User Not Registered");
    } else if (res.status === 403) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login successful");
      console.log("Login successful");

      history.push("/");
    }

  }


  return (
    <section className="signup">
      <div className="signup-content grid">
        <div className="signup-form">
          <h2 className='form-title'>Login</h2>
          <form className='register-form' id='register-form' method='POST'>
            <div className="form-group">
              <label htmlFor="email">
                <span className="material-icons">
                  email
                </span>
              </label>
              <input type="email" name='email' id='email' autoComplete='off' placeholder='Enter Your Email' value={user.email} onChange={handleInputs} />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <span className="material-icons">
                  lock
                </span>
              </label>
              <input type="password" name='password' id='password' autoComplete='off' placeholder='Password' value={user.password} onChange={handleInputs} />
            </div>
            <div className='form-group form-button'>
              <input type="submit" name="login" id="login" className='form-submit' value='Login' onClick={PostData} />
              <input type="reset" name="reset" id="reset" className='form-reset' value='Reset' />
            </div>
          </form>
        </div>
        <div className="signup-image">
          <figure>
            <img src={signin} alt="signup" />
          </figure>
          <p>Don't have an account? <Link to='/signup'>Register Now</Link></p>
        </div>
      </div>
    </section>
  )
}

export default Login