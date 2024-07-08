import {Link} from "react-router-dom";

const Navbar = () => {
  
  const uconntact = "https://uconntact.uconn.edu/organization/concretecanoeassociationuconn";
  const instagram = "https://www.instagram.com/uconnconcretecanoe";
  const groupme = "https://groupme.com/join_group/55277612/5LKpXhFn";

  return (
    <>
      <header><img className="logo" src="src/assets/logo.png" alt="UCONN Concrete Canoe"width="100px" height="auto"></img>
        <nav>
          <ul>
            <li className="navlink" style={{marginRight:'35px'}}><a className="selected" href="#">Home</a></li>
            <li className="navlink" style={{marginRight:'35px'}}><Link to="../pages/sponsors.tsx"> <a className="unselected">Sponsors</a></Link></li>
            <li className="navlink"><Link to="../pages/process.tsx"> <a className="unselected">Process</a></Link></li>
          </ul>
        </nav>
      <div>
        <a className="icon" href={groupme} target="_blank"><img src="src/assets/hash.svg" width="18px" height="auto"></img></a>
        <a className="icon" href={instagram} target="_blank"><img src="src/assets/instagram.svg" width="18px" height="auto"></img></a>
        <a className="cta" href={uconntact} target="_blank"><button>Join UConntact</button></a>
      </div>
      </header>
    </>
  );
};

export default Navbar