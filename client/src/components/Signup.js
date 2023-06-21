import React, { useState } from 'react'
import signup from '../images/signup.webp';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Signup = () => {

  const history = useHistory();
  const [user, setUser] = useState({
    name: '', email: '', phone: '', work: '', password: '', cpassword: ''
  })
  
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]: value});
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert("Invalid Registration");
    } else {
      window.alert("User Registered successfully");
      console.log("Registration successful");

      history.push("/signin");
    }

  }





  return (
      <section className="signup">
          <div className="signup-content grid">
            <div className="signup-form">
              <h2 className='form-title'>Sign Up</h2>
              <form className='register-form' id='register-form' method='POST'>
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="material-icons">
                      person
                    </span>
                  </label>
                  <input type="text" name='name' id='name' autoComplete='off' placeholder='Your Name' value={user.name} onChange={handleInputs}/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <span className="material-icons">
                      email
                    </span>
                  </label>
                  <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email' value={user.email} onChange={handleInputs}/>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <span className="material-icons">
                      phone
                    </span>
                  </label>
                  <input type="number" name='phone' id='phone' autoComplete='off' placeholder='Your Phone Number' value={user.phone} onChange={handleInputs}/>
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <span class="material-icons">
                      badge
                    </span>
                  </label>
                  <input type="text" name='work' id='work' autoComplete='off' placeholder='Your Profession' value={user.work} onChange={handleInputs}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <span className="material-icons">
                      lock
                    </span>
                  </label>
                  <input type="password" name='password' id='password' autoComplete='off' placeholder='Password' value={user.password} onChange={handleInputs}/>
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <span className="material-icons">
                      lock
                    </span>
                  </label>
                  <input type="password" name='cpassword' id='cpassword' autoComplete='off' placeholder='Confirm Password' value={user.cpassword} onChange={handleInputs}/>
                </div>
                <div className='form-group form-button'>
                  <input type="submit" name="signup" id="signup" className='form-submit' value='Register' onClick={PostData}/>
                  <input type="reset" name="reset" id="reset" className='form-reset' value='Reset'/>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signup} alt="signup" />
              </figure>
              <p>Already have an account? <Link to='/signin'>Login</Link></p>
            </div>
          </div>
      </section>
  )
}

export default Signup