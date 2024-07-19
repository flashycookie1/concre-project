import Navbar from "../components/navbar";
import NavBarFooter from "../components/navbarFooter";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../process.css'

import start from '../assets/timeline/start.jpg';
import end from '../assets/timeline/end.jpeg';
import theme from '../assets/timeline/theme.jpg'
import mix from '../assets/timeline/mix.png';
import mold from '../assets/timeline/mold.jpg';
import layerOne from '../assets/timeline/layerOne.jpeg';
import layerTwo from '../assets/timeline/layerTwo.png';
import mesh from '../assets/timeline/mesh.png';
import gunwale from '../assets/timeline/gunwaleMesh.png';
import setting from '../assets/timeline/setting.jpg';
import designPapers from '../assets/timeline/designPapers.png';
import demold from '../assets/timeline/demold.png';
import presenting from '../assets/timeline/presentation.png';
import sanding from '../assets/timeline/sanding.jpeg';
import sectional from '../assets/timeline/sectional.png';
import display from '../assets/timeline/display.png';
import competition from '../assets/timeline/competition.jpg';

const Process = () =>{
    return(
        <>
            <Navbar></Navbar>
            <div className="small-transition">
                <p className="small-trans-text" style={{paddingBottom:'50px'}}>
                    How we go from 
                </p>
                <div className="small-transitionDiv">
                    <img src={start} alt="start" style={{width:'380px'}}/>
                    <p className="small-trans-text" style={{width:'340px', textAlign:'center'}}>
                        to
                    </p>
                    <img src={end} alt="end" style={{width:'380px'}}/>
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
                        <img src={theme} alt="theme" style={{width:'100%'}}/>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                         <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Mix Designing and Testing</h3>
                         <img src={mix} alt="mix" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Putting Mold together</h3>
                        <img src={mold} alt="mold" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>The First Layer of Concrete</h3>
                        <img src={layerOne} alt="layerOne" style={{width:'100%'}}/>                       
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Adding Layers of Mesh Reinforcement</h3>
                        <img src={mesh} alt="mesh" style={{width:'100%'}}/>                       
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Reinforcement in the Gunwale</h3>
                        <img src={gunwale} alt="gunwale" style={{width:'100%'}}/>                       
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>The Second Layer of Concrete</h3>
                        <img src={layerTwo} alt="layerTwo" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Letting the Canoe Set</h3>
                        <img src={setting} alt="setting" style={{width:'100%'}}/>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Writing the Design Paper</h3>
                        <img src={designPapers} alt="designPapers" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Demolding the Canoe</h3>
                        <img src={demold} alt="demold" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Presentation Preparation</h3>
                        <img src={presenting} alt="presenting" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#629AED', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #629AED' }}
                        iconStyle={{ background: '#629AED', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Sanding and Finishing the Canoe</h3>
                        <img src={sanding} alt="sanding" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Creating the Sectional</h3>
                        <img src={sectional} alt="sectional" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Constructing the Display</h3>
                        <img src={display} alt="display" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#181c54ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #181c54ff' }}
                        iconStyle={{ background: '#181c54ff', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{textAlign:'center', paddingBottom:'20px'}}>Competing at the Symposium</h3>
                        <img src={competition} alt="competition" style={{width:'100%'}}/>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            
            <NavBarFooter></NavBarFooter>
        </>
    )
}

export default Process