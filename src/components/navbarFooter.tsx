import {Link} from "react-router-dom";

const NavbarFooter = () => {
    const uconntact = "https://uconntact.uconn.edu/organization/concretecanoeassociationuconn";
    const instagram = "https://www.instagram.com/uconnconcretecanoe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
    const groupme = "https://groupme.com/join_group/55277612/5LKpXhFn"
    
    return (
      <>
        <footer>
            <div className="navBarFooter">
                <a style={{display: 'flex', justifyContent: 'center'}} href="#top">
                <img src="src/assets/logo.png" width="100px" height="100px" alt="logo"/>
                <p className="textF" style={{paddingTop:'3%', textAlign:'left', color: '#FFFEF0', width:'50%', paddingLeft:'3%'}}>University of Connecticut Concrete Canoe Association</p>
                </a>
                {/* <div className="links-icons">
                    <div className="linksF">
                        <Link to="/home" className="navFooterLink" onClick={() => {window.scroll(0, 0)}}> Home</Link>
                        <Link to="/sponsors" className="navFooterLink" onClick={() => {window.scroll(0, 0)}}> Sponsors</Link>
                        <Link to="/process" className="navFooterLink" onClick={() => {window.scroll(0, 0)}}> Process</Link>
                    </div>
                    </div> */}
                    <div className="iconsF">
                        <a className="iconF" href={groupme} target="_blank"><img src="src/assets/hash.svg" width="23px" height="auto"></img></a>
                        <a className="iconF" href={instagram} target="_blank"><img src="src/assets/instagram.svg" width="23px" height="auto"></img></a>
                        <a className="cta" href={uconntact} target="_blank"><button>Join UConntact</button></a>
                    </div>
                    <hr style={{
                      marginRight:'4%',
                      marginLeft:'5%',
                      width:'100%',
                      height:'1.5px',
                      backgroundColor: '#5C6070'}}/>
                </div>
        </footer>
      </>
    );
  };
  
  export default NavbarFooter