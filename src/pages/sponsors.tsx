import Navbar from "../components/navbar";
import NavBarFooter from "../components/navbarFooter";
import spons_pack from "../assets/FINAL_Sponsor_Packet.pdf";
import '../sponsors.css';
import HNTB from "../assets/HNTB_Logo.png";
import Laticrete from "../assets/laticrete_logo.png";
import Triumph from "../assets/triumph_logo.png";


const Sponsors = () =>{
    return(
        <>
            <Navbar></Navbar>
            <div style={{ display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignContent:"center",
                          alignItems: "center",
                          paddingBottom: "100px" }}>
                <p className="intro_text">Thanks to Our Sponsors!</p>
                <img src={Triumph}
                    style={{backgroundColor: "white",
                    padding: 30,
                    height: 100,
                    marginBottom: 50
                }}/>
                <img src={HNTB}
                    style={{backgroundColor: "white",
                    padding: 30,
                    height: 100,
                }}/>
                <img src={Laticrete}
                    style={{backgroundColor: "white",
                    padding: 30,
                    marginTop: 50,
                    height: 150,
                }}/>
                <p className="intro_text">
                    Check out our Sponsor Packet:
                </p>
                <object width="50%"  height="900px" data={spons_pack}  type="application/pdf"/>
            </div>
            <NavBarFooter></NavBarFooter>
        </>
    )
}

export default Sponsors