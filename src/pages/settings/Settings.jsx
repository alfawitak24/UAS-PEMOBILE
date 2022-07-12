import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="sWrapper">
        <div className="sJudul">
          <span className="sUpJudul">Update Your Account</span>
          <span className="sDelJudul">Delete Account</span>
        </div>
        <form className="sForm">
          <label>Profile Picture</label>
          <div className="spp">
            <img src="https://anteroaceh.com/files/images/3483794198b80fc3746a76760cde6966.jpeg" alt="" />
            <label htmlFor="fileInput">
            <i className="Icon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label> UserName</label>
          <input type="text" placeholder="Alfa" />
          <label> Email</label>
          <input type="email" placeholder="Alfawitak24@gmail.com" />
          <label> Password</label>
          <input type="Password" />
          <button className="sSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
