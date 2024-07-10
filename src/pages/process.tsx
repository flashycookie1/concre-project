import Navbar from "../components/navbar";
import NavBarFooter from "../components/navbarFooter";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../process.css'

const Process = () =>{
    return(
        <>
            <Navbar></Navbar>
            <div className="small-transition">
                <p className="small-trans-text" style={{paddingBottom:'50px'}}>
                    How we go from 
                </p>
                <div className="small-transitionDiv">
                    <img src="src/assets/timeline/start.jpg" alt="start" style={{width:'380px'}}/>
                    <p className="small-trans-text" style={{width:'340px', textAlign:'center'}}>
                        to
                    </p>
                    <img src="src/assets/timeline/end.jpeg" alt="end" style={{width:'380px'}}/>
                </div>
                <p className="small-trans-text" style={{paddingTop:'50px', textAlign:'center'}}>
                    Check out the Process Below:
                </p>
            </div>
            <div className="timeline">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Picking Theme + Designing and Planning</h3>
                        <img src="src/assets/timeline/theme.jpg" alt="theme" style={{width:'100%'}}/>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                         <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Mix Designing and Testing</h3>
                         <img src="src/assets/timeline/mix.png" alt="mix" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Putting Mold together</h3>
                        <img src="src/assets/timeline/mold.jpg" alt="mold" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>The First Layer of Concrete</h3>
                        <img src="src/assets/timeline/layerOne.jpeg" alt="layerOne" style={{width:'100%'}}/>                       
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Adding Layers of Mesh Reinforcement</h3>
                        <img src="src/assets/timeline/mesh.png" alt="mesh" style={{width:'100%'}}/>                       
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Reinforcement in the Gunwale</h3>
                        <img src="src/assets/timeline/gunwaleMesh.png" alt="gunwale" style={{width:'100%'}}/>                       
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>The Second Layer of Concrete</h3>
                        <img src="src/assets/timeline/layerTwo.png" alt="layerTwo" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Letting the Canoe Set</h3>
                        <img src="src/assets/timeline/setting.jpg" alt="setting" style={{width:'100%'}}/>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Writing the Design Paper</h3>
                        <img src="src/assets/timeline/designPapers.png" alt="designPapers" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Demolding the Canoe</h3>
                        <img src="src/assets/timeline/demold.png" alt="demold" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Presentation Preparation</h3>
                        <img src="src/assets/timeline/presentation.png" alt="presenting" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Sanding and Finishing the Canoe</h3>
                        <img src="src/assets/timeline/sanding.jpeg" alt="sanding" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Creating the Sectional</h3>
                        <img src="src/assets/timeline/sectional.png" alt="sectional" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Constructing the Display</h3>
                        <img src="src/assets/timeline/display.png" alt="display" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Competing at the Symposium</h3>
                        <img src="src/assets/timeline/competition.jpg" alt="competition" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            
            <NavBarFooter></NavBarFooter>
        </>
    )
}

export default Process