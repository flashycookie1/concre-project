import Navbar from "../components/navbar";
import MiniGallery from "../components/minigallery";
import Hero from "../components/hero";
import NewsBoard from "../components/newsboard";
import Challenge from "../components/challenge";
import Sponsor from "../components/sponsor";
import NavBarFooter from "../components/navbarFooter";
import Theme from "../components/theme";

const Home = () => {
    return(
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <MiniGallery></MiniGallery>
            <NewsBoard></NewsBoard>
            <Challenge></Challenge>
            <Theme></Theme>
            <Sponsor></Sponsor>
            <NavBarFooter></NavBarFooter>
        </>
    )
}

export default Home