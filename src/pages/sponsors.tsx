import Navbar from "../components/navbar";
import NavBarFooter from "../components/navbarFooter";
import spons_pack from "../assets/FINAL_Sponsor_Packet.pdf"
import '../sponsors.css'


const Sponsors = () =>{
    return(
        <>
            <Navbar></Navbar>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent:"center", alignItems: "center",
                  paddingBottom: "100px" }}>
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