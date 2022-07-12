import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <span className="ljudul">LOGIN</span>
     <form className="lForm">
      <label >Email</label>
      <input type="text" className="lInput" placeholder="Enter Your Email" />
      <label >Password</label>
      <input type="Password" className="lInput" placeholder="Enter Your Password" />
      <button className="lbutton">Login</button>
     </form>
     <button className="lrbutton">Register</button>
    </div>
  )
}
