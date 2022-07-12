import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="judulsidebar">Tentang Saya</span>
        <img src="https://i.pinimg.com/originals/68/04/aa/6804aa27df2c4015a26b291f401f6ccc.jpg" alt="" />
        <p>Gilbertius Alfiano Lamawitak</p>
        </div>
        <div className="sidebarItem">
         <span className="judulsidebar">Biodata</span>
         <ul className="sdlist">
          <li className="sblItem">NIM : 1901020055</li>
          <li className="sblItem">Hobi : Musik, Game</li>
          <li className="sblItem">no Hp : 081337948958</li>
          </ul> 
          </div>
          <div className="sidebarItem">
            <span className="judulsidebar">Follow</span>
            <div className="sosmed">
            <i className="sbIcon fa-brands fa-facebook"></i>
            <i className="sbIcon fa-brands fa-instagram"></i>
            <i className="sbIcon fa-brands fa-youtube"></i>
            </div>
            </div>    
    </div>
  )
}
