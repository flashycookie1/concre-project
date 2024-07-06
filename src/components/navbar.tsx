const Navbar = () => {
  
  const uconntact = "https://uconntact.uconn.edu/organization/concretecanoeassociationuconn";
  const instagram = "https://www.instagram.com/uconnconcretecanoe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const groupme = "https://groupme.com/join_group/55277612/5LKpXhFn"
  const email = "";

  return (
    <>
      <header><img className="logo" src="src/assets/logo.png" alt="UCONN Concrete Canoe"width="7%" height="auto"></img>
        <nav>
          <ul>
            <li className="navlink"><a className="selected" href="#">Home</a></li>
            <li className="navlink"><a className="unselected" href="#">Sponsors</a></li>
            <li className="navlink"><a className="unselected" href="#">Archive</a></li>
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