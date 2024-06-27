export const Navbar = () => {
  
  const uconntact = "https://uconntact.uconn.edu/organization/concretecanoeassociationuconn";
  const instagram = "https://www.instagram.com/uconnconcretecanoe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const groupme = "https://groupme.com/join_group/55277612/5LKpXhFn"

  return (
    <>
      <img className="logo" src="src/assets/logoDark.svg" alt="UCONN Concrete Canoe Logo Here"width="13%" height="auto"></img>
    <nav>
    <ul>
    <li className="navlink"><a className="selected" href="#">Home</a></li>
    <li className="navlink"><a href="#">Team</a></li>
    <li className="navlink"><a href="#">Sponsors</a></li>
    <li className="navlink"><a href="#">Events</a></li>
    </ul>
    </nav>
    <div>
      <a className="icon" title="Contact Us" href="#" target="_blank"><img src="src/assets/mail.svg" width="20px" height="auto"></img></a>
      <a className="icon" href={groupme} target="_blank"><img src="src/assets/hash.svg" width="20px" height="auto"></img></a>
      <a className="icon" href={instagram} target="_blank"><img src="src/assets/instagram.svg" width="20px" height="auto"></img></a>
      <a className="cta" href={uconntact} target="_blank"><button>Join UConntact</button></a></div>
    </>
  );
};
