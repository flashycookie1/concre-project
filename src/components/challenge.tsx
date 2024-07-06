const Challenge = () => {
  const uconntact = "https://uconntact.uconn.edu/organization/concretecanoeassociationuconn";
  const groupme = "https://groupme.com/join_group/55277612/5LKpXhFn"

  return (
    <div className="challengeDiv">
      <p className="challengetxt">
        YOUR CHALLENGE: Design and build a concrete canoe according to ASCE guidelines. We go through the entire 
        engineering process--from initial design and testing to final construction--before submitting 
        a design paper, presenting to panel of judges, and racing against other teams at the annual
        ASCE Northeastern Student Symposium. 
      </p>
      <p className="interested">
        We are open to ALL MAJORS!
      </p>
      <p className="interested">
      Interested? Join our <a className="embeded-link" href={uconntact}> 
      UConntact</a> and <a className="embeded-link" href={groupme}> GroupMe</a>
      </p>

    </div>
  );
};

export default Challenge;