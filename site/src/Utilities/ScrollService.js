import { TOTAL_SCREENS } from "./CommmonUtils";
import {Subject} from 'rxjs'

export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBroadcaster = new Subject() 

    static currentScreenFadeIn = new Subject()

    constructor () {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewPort)
    }

    scrollToHireMe = () => {
        let homeScreen = document.getElementById("Contact Me")
        if (!homeScreen) return; 
        homeScreen.scrollIntoView({behavior: "smooth"})
    }

    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect(); // returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
        let elementBottom = rec.Bottom;
        let elementTop = rec.Top;
        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0 // if the element top is less than the window inner height 
                                                                                    // and the elementBottom is greater than or = to zero
                                                                                    // then the element is partially visible. 
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight

        switch(type){
            case "partial":
            return partiallyVisible

            case "complete":
                return completelyVisible
                default:
                    return false

        }
    }
    checkCurrentScreenUnderViewport = (event) => {
        if (!event || Object.keys(event).length < 1) return;
        for (let screen of TOTAL_SCREENS) {
            let screenFromDom = document.getElementById(screen.screen_name); 
            if (!screenFromDom)
            continue;

            let fullyVisible = this.isElementInView(screenFromDom, "complete");
            let partiallyVisible = this.isElementInView(screenFromDom, "partial");

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    })
                    screen['alreadyRendered'] = true;
                    break;
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBroadcaster.next({
                        screenInView: screen.screen_name
                    })
                    break;
                }
            }

        }

    }
    
}