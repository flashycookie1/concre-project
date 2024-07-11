import { InstagramEmbed } from 'react-social-media-embed';

const Challenge = () => {
  const uconntact =
    "https://uconntact.uconn.edu/organization/concretecanoeassociationuconn";
  const groupme = "https://groupme.com/join_group/55277612/5LKpXhFn";
  const instagram = "https://www.instagram.com/uconnconcretecanoe";

  return (
    <>
    <div className="challengeDiv">
      <p className="challengetxt" style={{maxWidth: '820px'}}>
        YOUR CHALLENGE: Design and build a concrete canoe according to ASCE
        guidelines. We go through the entire engineering process--from initial
        design and testing to final construction--before submitting a design
        paper, presenting to panel of judges, and racing against other teams at
        the annual ASCE Northeastern Student Symposium.
      </p>
      <p className="interested">
        We are open to ALL MAJORS! <br />
        Interested? Join our <a
        className="hover-underline-animation"
        href={uconntact}>
          UConntact
        </a> and <a
        className="hover-underline-animation"
        href={groupme}> GroupMe
        </a>
      </p>
        <div className="theme">
            <p style={{color: "#F2D027"}}>UCONN Concrete Canoe 2024-2025 Presents:</p>
                <img src="src/assets/UConnstellation.svg" style={{width: '75%'}}></img>
            <p style={{width: '60%'}}>
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
        </div>
    </>
  );
};

export default Challenge;
