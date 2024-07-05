const NewsBoard = () => {
  return (
      <div className="newsBoard">
        <h1 className="title">WHAT WE'RE UP TO</h1>
        <ul className="updates">
          <div className="text-button-grid">
            <li className="list-group-item">
              UConn takes 4th place overall at the ASCE<br/>
              Northeastern Student Symposium
            </li>
            <div className="b1Div">
              <button className="b1"> Visit Gallery </button>
            </div>
          </div>
          <hr />
          <div className="text-button-grid">
            <div>
              <li className="list-group-item">
                We're currently looking<br/>
                for Sponsors
              </li>
            </div>
            <div className="b1Div">
              <button className="b1"> Sponsor Us </button>
            </div>
          </div>
          <hr/>
          <div className="text-button-grid">
            <div>
              <li className="list-group-item">
                Planning for the 2024-2025<br/>
                Season is underway!
              </li>
            </div>
            <div className="b1Div">
              <button className="b1"> View Process </button>
            </div>
          </div>
          <hr />
        </ul>
      </div>
  );
};

export default NewsBoard;
