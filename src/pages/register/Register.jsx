import "./register.css"

export default function Register() {
  return (
    <div className="login">
      <span className="ljudul">Register</span>
     <form className="lForm">
      <label >Username</label>
      <input type="text" className="lInput" placeholder="Enter Your Username" />
      <label >Email</label>
      <input type="text" className="lInput" placeholder="Enter Your Email" />
      <label >Password</label>
      <input type="Password" className="lInput" placeholder="Enter Your Password" />
     </form>
     <button className="lrbutton">Register</button>
    </div>
  )
}
