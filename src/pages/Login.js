import "./Login.css";
import login from "../images/login.png";

const Login = () => {
    return (
        <div className="main">
          <div className="form-main">
             <div>
              <div className='imgs'>
                <div className='container-img'>
                  <img src={login} className="profile-img" alt='Not img found'/>
                </div>
                <div>
                  <h1 className='headingLogin'>Login Page</h1>
                  <form>
                  <input type="text" placeholder='UserName' name='name' className='inputField'/>
                  <br/> <br/>
                  <input type="password" placeholder='Password' name='password' className='inputField'/>
                  <br/> <br/>
                  <button className='login-btn'>Login</button>
                  </form>
                </div>
              </div>
             </div>
          </div>
        </div>
    )
  }
  
export default Login;  