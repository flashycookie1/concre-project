const NewsBoard = () => {
  return (
    <div className="newsBoardFlex">
      <div className="newsBoard">
          <h1 className="title">
            WHAT WE'RE UP TO
          </h1>
          <ul className="list-group">
            <div className="text-button-grid">
              <div>
                <li className="list-group-item1">UConn takes 4th place overall at the ASCE Northeastern Student Symposium</li>
              </div>
              <div className="b1Div">
                <button className="b1"> Visit Gallery </button>
              </div>  
            </div>
            <li className="line">___________________________________________________________________________________________</li>
            <div className="text-button-grid">
              <div>
                <li className="list-group-item2">We're currently looking for Sponsors</li>
              </div>
              <div className="b1Div">
                <button className="b1"> Sponsor Us </button>
              </div>  
            </div>
            <li className="line">___________________________________________________________________________________________</li>
            <div className="text-button-grid">
              <div>
                <li className="list-group-item3">Planning for the 2024-2025 Season is underway!</li>
              </div>
              <div className="b1Div">
                <button className="b1"> View Process </button>
              </div>  
            </div>
          </ul>
        </div>
    </div>
  )
}

export default NewsBoard