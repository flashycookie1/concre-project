export const NewsBoard = () => {
  return (
    <div className="newsBoardFlex">
      <div className="newsBoard">
        <div>
          <h1 className="title">
            WHAT WE'RE UP TO
          </h1>
        </div>
        <div>
          <ul className="list-group">
            <div className="text-button-grid">
              <div>
                <li className="list-group-item">UConn takes 4th place overall at the ASCE Northeastern Student Symposium</li>
              </div>
              <div>
                <button className="b1"> Visit Gallery </button>
              </div>  
            </div>
            <li className="line">________________________________________________________________________________</li>
            <div className="text-button-grid">
              <div>
                <li className="list-group-item">We're currently looking for Sponsors</li>
              </div>
              <div>
                <button className="b1"> Sponsor Us </button>
              </div>  
            </div>
            <li className="line">________________________________________________________________________________</li>
            <div className="text-button-grid">
              <div>
                <li className="list-group-item">Planning for the 2024-2025 Northeastern Competition is underway</li>
              </div>
              <div>
                <button className="b1"> View Process </button>
              </div>  
            </div>
          </ul>
        </div>
    </div>
  </div>
  )
}
