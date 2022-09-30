import React, { useState } from 'react'; 
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import './Resume.css';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';

export default function Resume(props) {
    const [selectedBulletIndex,setSewlectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setcarousalOffSetStyle] = useState({})
    const ResumeHeading = (props) => {
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <dov className='heading-date'>
                            {props.fromDate + '_' + props.toDate}
                        </dov>
                    ) : (
                        <div> </div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        </div>
    }; 

    const resumeBullets = [
        {label: 'Education', logoSrc: 'education.svg'},
        {label: 'Work Histroy', logoSrc: 'work-history.svg'},
        {label: 'Programming Skills', logoSrc: 'programming-skills.svg'},
        {label: 'Projects', logoSrc: 'Projects.svg'},
        {label: ' Interests', logoSrc: 'Interests.svg'}
    ];

    const programmingSkillDetails = [
        {skill: 'TypeScript', ratingPercentage: 85},
        {skill: 'JavaScript', ratingPercentage: 85},
        {skill: 'Node JS', ratingPercentage: 85},
        {skill: 'Python', ratingPercentage: 85},
        {skill: 'PostgreSQL', ratingPercentage: 85},
        {skill: 'React', ratingPercentage: 85},
        {skill: 'Jest & Jasmine Testing', ratingPercentage: 85},
        {skill: 'HTML & CSS', ratingPercentage: 85}
    ];

    const projectDetails = [
        {
            title: 'Personal Website',
            duration: {fromDate: '2019', toDate: '2022'},
            description: 'A personal site which showcases my relevant experience in one collective location.',
            SubHeading: 'Technologies Used: React JS, Bootstrap'
        },
        {
            title: 'A Robot',
            duration: {fromDate: '2022', toDate: '2022'},
            description: '',
            SubHeading: 'JavaScript'
        },
        {
            title: 'TestBank',
            duration: {fromDate: '2019', toDate: '2019'},
            description: 'A JS web-application meant to replace SUNY Albanys test taking software, Blackboard',
            SubHeading: 'Technologies Used: Firebase, JavaScript'
        },
    ]; 

    const resumeDetails = [
        <div className='resume-screen-container' key='education'>
            <ResumeHeading 
            heading={'University At Albany, SUNY'}
            subheading={'Bachelor Of Science Computer Science (Mathematics Concentration)'}
            fromDate={'2015'}
            toDate={'2019'}
            />
        </div>,
        <div className='resume-screen-container' key='work-experience'>
            <ResumeHeading 
            heading={'Notable Finance'}
            subheading={'Data Engineer'}
            fromDate={'2021'}
            toDate={'Present'}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                Gracefully handled ownership of the Resolution/Escalation of all Engineering department related web-application issues.
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                - Utilized TypeScript to develop and utilize backend processes to propel a smooth U.X. within our App
                </span>
                <br/>
                <span className='resume-description-text'>
                - Monitored multiple Staging and Production repositories for the Web Application.
                </span>
                <br/> 
                <span className='resume-description-text'>
                - Utilized partner company API’s and JS to create large, essential automated data flows around the organization.
                </span>
            </div>,
            <div className='resume-screen-container programming-skills-container' key='programming-skills'>
                {programmingSkillDetails.map((skill, index) => (
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-percentage'>
                            <div style={{width: skill.ratingPercentage + '%'}}
                            className='active-percentage'>
                            </div>
                        
                        </div>
                    </div>
                ))}
            </div>,
            <div className='resume-screen-container' key='projects'>
                {projectDetails.map((projectDetails, index) => (
                    <ResumeHeading 
                    ket={index}
                    heading={projectDetails.subHeading}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                    />
                ))}
            </div>,  
            <div className='resume-screen-container' key='interests'>
                <ResumeHeading 
                heading='Charity' 
                description='I am a member of a charity named Destiny Bound which empowers families, single parents and young adults.'
                />
                <ResumeHeading 
                heading='Running' 
                description='Apart from being a tech enthusiast, I also enjoy running outside of work and consider it to be very therapeutic.'
                />
                <ResumeHeading 
                heading='Dogs' 
                description='Could you tell? The Beautiful pup you see above is my 4 year old baby, Merc'
                />
            </div>
        </div>
    ]

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) 
        return 
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
        <div className='resume-container screen-container' id={props.id || ''}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
            </div>

        </div>
    )
}