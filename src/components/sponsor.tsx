import { Link } from "react-router-dom";
import "../process.css";
import sponsorImg from '../assets/sponsorimg.png';

const Sponsor = () => {
  return (
    <>
      <div className="sponsorFlex">
        <div className="sponsorFlexGrid">
          <div className="sponsorDiv">
            <p className="sponsorText"> Interested in sponsoring us? Learn how becoming a sponsor works </p>
            <Link to="/sponsors">
              <button className="sponsorButton">Learn More</button>
            </Link>
          </div>
          <div className="sponsorimgDiv">
            <img src={sponsorImg} width="370px"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sponsor;
