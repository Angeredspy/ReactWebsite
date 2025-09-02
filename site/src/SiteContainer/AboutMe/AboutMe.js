import React from 'react'; 
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
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
        const SCREEN_CONSTANTS = {
            description: `I'm a Software Engineer focused on building reliable web applications and data workflows across React/Next.js and Angular, with a strong foundation in SQL and cloud services. At Doctors Without Borders (MSF), I integrated OpenAI's GPT-4 into existing systems, improved search with Azure Cognitive Search, and led migrations while automating pipelines with Python + Apache Airflow. I care about measurable outcomes—faster search, better SEO/indexing, and smoother releases backed by Cypress and Jest.`,
            highlights: {
                bullets:[
                    'Frontend & Backend Web Development (Angular, React, Next.js, C#, TypeScript)',
                    'Database design, PostgreSQL/T-SQL, ETL pipelines & migrations',
                    'OpenAI API (GPT-4) integration and Azure Cognitive Search improvements',
                    'Python + Apache Airflow automation for critical workflows',
                    'End-to-end & unit testing with Cypress and Jest',
                    'SEO fixes: Google Indexing, crawler APIs, Search Console/Analytics, Screaming Frog', 
                ],                                                                                 
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