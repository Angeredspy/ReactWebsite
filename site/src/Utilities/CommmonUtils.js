import Home from "../SiteContainer/Home/Home";
import AboutMe from "../SiteContainer/AboutMe/AboutMe";
import Resume from "../SiteContainer/Resume/Resume";
import TechnicalLandscape from '../SiteContainer/TechnicalLandscape/TechnicalLandscape';
import ContactMe from "../SiteContainer/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "About Me",
        component: AboutMe,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    {
        screen_name: "Technical Landscape",
        component: TechnicalLandscape,
    },
    {
        screen_name: "Contact Me",
        component: ContactMe,
    },
];

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) {
        return -1
    }

    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
        if(TOTAL_SCREENS[i].screen_name === screen_name){
            return i;
        }
    }
}

