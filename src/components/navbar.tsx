import {Link} from "react-router-dom";

import logo from '../assets/logo.png';
import hash from '../assets/hash.svg';
import insta from '../assets/instagram.svg';
//importing images for vercel compatibility

const Navbar = () => {
  
  const uconntact = "https://uconntact.uconn.edu/organization/concretecanoeassociationuconn";
  const instagram = "https://www.instagram.com/uconnconcretecanoe";
  const groupme = "https://groupme.com/join_group/55277612/5LKpXhFn";

  return (
    <>
      <header>
        <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', columnGap:'300px', rowGap:'20px', justifyContent:'center', 
          alignItems:'center', marginBottom:'20px'}}>
          <div style={{width:'280px', display:'flex', justifyContent:'center'}}>
            <Link to='/home'><img className="logo" src={logo} alt="UCONN Concrete Canoe"width="100px" height="auto"></img></Link>
          </div>
          <div>
            <li className="navlink" style={{marginRight:'35px'}}><Link to="/home" className="unselected"> Home</Link></li>
            <li className="navlink" style={{marginRight:'35px'}}><Link to="/sponsors" className="unselected"> Sponsors</Link></li>
            <li className="navlink"><Link to="/process" className="unselected"> Process</Link></li>
          </div>
          <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', columnGap:'40px', rowGap:'10px', justifyContent:'center', alignItems:'center'}}>
            <a className="icon" href={groupme} target="_blank"><img src={hash} width="18px" height="auto"></img></a>
            <a className="icon" href={instagram} target="_blank"><img src={insta} width="18px" height="auto"></img></a>
            <a className="cta" href={uconntact} target="_blank"><button>Join UConntact</button></a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar