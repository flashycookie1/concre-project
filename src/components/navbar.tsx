import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import hash from "../assets/hash.svg";
import insta from "../assets/instagram.svg";
//importing images for vercel compatibility

const Navbar = () => {
  const uconntact =
    "https://uconntact.uconn.edu/organization/concretecanoeassociationuconn";
  const instagram = "https://www.instagram.com/uconnconcretecanoe";
  const groupme = "https://groupme.com/join_group/55277612/5LKpXhFn";

  return (
    <>
      <header style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            columnGap: 200,
            flexWrap: "wrap",
            rowGap: "10px",
            alignItems: "center",
            marginBottom: "20px",
            width: '100%'
          }}
        >
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/home">
              <img
                src={logo}
                alt="UCONN Concrete Canoe"
                width="100"
                height="auto"
              ></img>
            </Link>
          </div>
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
              columnGap: 50,
            }}
          >
            <li className="navlink">
              <Link to="/home" className="unselected">
                {" "}
                Home
              </Link>
            </li>
            <li className="navlink">
              <Link to="/sponsors" className="unselected">
                {" "}
                Sponsors
              </Link>
            </li>
            <li className="navlink">
              <Link to="/process" className="unselected">
                {" "}
                Process
              </Link>
            </li>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "300px",
            }}
          >
            <a className="icon" href={groupme} target="_blank">
              <img src={hash} width="18px" height="auto"></img>
            </a>
            <a className="icon" href={instagram} target="_blank">
              <img src={insta} width="18px" height="auto"></img>
            </a>
            <a className="cta" href={uconntact} target="_blank">
              <button>Join UConntact</button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
