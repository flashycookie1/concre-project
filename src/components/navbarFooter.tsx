import {Link} from "react-router-dom";

const NavbarFooter = () => {
    const uconntact = "https://uconntact.uconn.edu/organization/concretecanoeassociationuconn";
    const instagram = "https://www.instagram.com/uconnconcretecanoe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
    const groupme = "https://groupme.com/join_group/55277612/5LKpXhFn"
    
    return (
      <>
        <footer>
            <div className="navBarFooter">
                <div className="logoF">
                    <img src="src/assets/logo.png" width="270px" alt="logo" />
                </div>
                <div className="links-icons">
                    <div className="linksF">
                        <Link to="/home" className="navFooterLink" onClick={() => {window.scroll(0, 0)}}> Home</Link>
                        <Link to="/sponsors" className="navFooterLink" onClick={() => {window.scroll(0, 0)}}> Sponsors</Link>
                        <Link to="/process" className="navFooterLink" onClick={() => {window.scroll(0, 0)}}> Process</Link>
                    </div>
                    <div className="iconsF">
                        <a className="iconF" href={groupme} target="_blank"><img src="src/assets/hash.svg" width="35px" height="auto"></img></a>
                        <a className="iconF" href={instagram} target="_blank"><img src="src/assets/instagram.svg" width="35x" height="auto"></img></a>
                        <a className="iconF" href={uconntact} target="_blank"><img src="src/assets/uconntact.svg" width="35px" height="auto"></img></a>
                    </div>
                </div>
            </div>
        </footer>
      </>
    );
  };
  
  export default NavbarFooter