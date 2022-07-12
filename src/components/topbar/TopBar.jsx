import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
      <i className="icon fa-brands fa-facebook"></i>
      <i className="icon fa-brands fa-instagram"></i>
      <i className="icon fa-brands fa-youtube"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGIN</li>
        </ul>
      </div>
      <div className="topRight">
      <i className="Profil fa-solid fa-user"></i>
      <i className="search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
