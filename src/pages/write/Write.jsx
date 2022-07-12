import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <form className="writeform">
        <div className="wfGrup">
          <label htmlFor="fileInput">
          <i className="Icon fa-solid fa-folder-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          <input type="text" placeholder="Judul" className="wInput" autoFocus={true} />
        </div>
        <div className="wfGrup">
          <textarea placeholder="Tulisan CeritaMu" type="text" className="wInput wText"></textarea>
        </div>
        <button className="wSubmit">Publish</button>
      </form>
    </div>
  )
}
