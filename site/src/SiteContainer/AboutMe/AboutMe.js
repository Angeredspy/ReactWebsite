import React, {useEffect} from 'react'; 
import ScreenHeading from '../../../src/Utilities/ScreenHeading/ScreenHeading.js';
import ScrollService from'../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './Aboutme.css'

export default function AboutMe (props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id) 
        return 
        Animations.animations.fadeInScreen(props.id)
    }
        const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
        const SCREEN_CONSTANTS = {
            description: `I am a seasoned Engineer, experienced in building scalable applications & using OOP languages such as Node JS and Python alongside relational DBs. My current goal is to return to Doctors Without Borders as a Software Engineer, and to assist the MSF team in providing independent, impartial medical humanitarian assistance to the people who need it most.`,
            highlights: {
                bullets:[
                    'Frontend and Backend Web Development (Bootstrap, Typescript)',
                    'Experienced Database Management & Maintenance',
                    'T.D.D. paradigms & testing with frameworks like Jest & Jasmine',
                    'Technical resolutions to internal & external UX issues',
                    'Critical Task Automations',
                    'Expert use of 3rd party tooling; see my Technical Landscape!', //tech landscape will replace testimonial
                ],                                                                                  // and will showcase the technologies i am familiar with and have interacted with extensively 
                heading: 'Part of what I bring to the table:'
            }
        }
        const renderHighlight = () => {
            return(
                SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                    <div className='highlight' key={i}>
                        <div className='highlight-blob'></div>
                        <span>{value}</span>
                    </div>
                ))
            )
        }

    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ''}>
                <div className='about-me-parent'>
                    <ScreenHeading title={'About Me'} subHeading={'Who is this guy?'} />
                    <div className='about-me-card'>
                        <div className='about-me-profile'></div>
                        <div className='about-me-details'>
                            <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                            <div className='about-me-highlights'>
                                <div className='highlight-heading'>
                                    <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                                </div>
                                {renderHighlight()}
                            </div>
                            <div className='about-me-options'>
                            <button className="btn primary-btn"
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            >Hire Me</button>
                                <a href="ChristopherGrahamsResume.pdf" download="Chris Graham">
                                     <button className="btn highlighted-btn">Get Resume</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}