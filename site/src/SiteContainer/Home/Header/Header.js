import React, { useState } from 'react';
import './Header.css';
import { TOTAL_SCREENS } from '../../../Utilities/CommmonUtils';
import { GET_SCREEN_INDEX } from '../../../Utilities/CommmonUtils';
import ScrollService from '../../../Utilities/ScrollService';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0)
    const [showHeaderOptions, setHeaderOptions] = useState(false)
    
    let updateScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) 
            return;
            let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
            if(screenIndex < 0)
            return
    }
    let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateScreen)

    const getHeaderOptions = () => {
        return TOTAL_SCREENS.map((screen, i) => (
                <div key ={screen.screen_name} className={getHeaderOptionsClass(i)} onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
    }

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";
    if (selectedScreen === index) classes += "selected-header-option ";
    return classes;
  };
 

    const switchScreen = (index, screen )=> {
        let screenComponent=document.getElementById(screen.screen_name)
        if (!screenComponent) return;

        screenComponent.scrollIntoView({behavior: 'smooth'})
        setSelectedScreen(index);
        setHeaderOptions(false);
    }

    return (
        <div>
            <div className='header-container' onClick={() => setHeaderOptions(!showHeaderOptions)}>
                <div className='header-parent'>
                    <div className='header-hamburger' onClick={() => setHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
                    </div>
                    <div className='header-logo'>
                        <span>Chris</span>
                    </div>
                    <div className={showHeaderOptions ? "header-options show-hamburger-options" : "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}