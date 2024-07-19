import { InstagramEmbed } from 'react-social-media-embed';
const instagram = "https://www.instagram.com/uconnconcretecanoe";

import uconnstellation from '../assets/UConnstellation.svg';

const Theme = () => {
    return(
        <>
        <div className="themeSpacer">
        </div>
        <div className="theme">
            <p style={{color: "#F2D027"}}>UCONN Concrete Canoe 2024-2025 Presents:</p>
                <img src={uconnstellation} style={{width: '100%'}}></img>
            <p>
                Stay Tuned! Follow <a
                    className="hover-underline-animation"
                    href={instagram}
                    target="_blank"
                    style={{ color: "#629AED" }}
                > @uconnconcretecanoe
                </a> on Instagram for announcements and upcoming events.
            </p>
        <div style={{ display: 'flex', justifyContent: 'center', maxWidth:'410px' }}>
            <InstagramEmbed url="https://www.instagram.com/uconnconcretecanoe" width={450} style={{padding: 20}}/>
        </div>
      </div>
        </>
    )
}

export default Theme