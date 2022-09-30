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