import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './TechnicalLandscape.css';
import shape from '../../Assets/Landscape/shape-bg-landscape.png'

export default function TechnicalLandscape(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
        const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
        
        const options = {
            loop: true,
            margin:0,
            nav: true,
            animateIn: "bounceInRight",
            animateOut: "bounceOutRight",
            dots: true,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items:1,
                },
                768:{
                    items:1,
                },
                1000:{
                    items:3,
                }
            }
        }

        //ToDo, add OwlCarousel component div section to describe TablePlus 
        //and its advantages as a Database Management System 
        
    return (
        <div>
            <ScreenHeading 
            title={'Technical Landscape'}
            subHeading={'Some technologies ive worked with across my career include'}
            />
            <section className='landscape-section' id={props.id || ''}>
                <div className='container'>
                    <div className='row'>
                        <OwlCarousel className='owl-carousel' id='landscape-carousel' {...options}>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Mezmo</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/mezmologo.png' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Mezmo (formerly LogDNA) is a data platform that gives developers better 
                                            insight in regard to the state of their application by routing & centralizing affiliated logs to 
                                            a singular location in real time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Amazon Web Services</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/AWS.png' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            AWS is a robust cloud computing platform providing developers with 
                                            a variety of infrastructure services including cloud storage (S3)
                                            relational database services, container solutions & much more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Google Apps Scripts</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/GoogleAppsScript.svg' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Google Apps Scripts is a service equipped with built in libraries & a code editor
                                            allowing developers to imbue business logic with
                                            JavaScript to create seamless automations, 
                                            intergrated within the Google Workspace.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                            <h5>Heroku</h5>
                                            <div className='technical-info'>
                                                <img src='../LandscapeImages/heroku.png' alt='no internet connection'></img>                                        
                                            </div>
                                            <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Heroku is a platform as a service (PaaS) & a Container Solution similar to Docker and AWS containers, that allows developers to build and deploy
                                            scalable applications within virtualized Linux containers named Dynos. Herokus CLI commands make it
                                            easy to interact with Heroku via the command line.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Metabase</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/Metabase.png' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Metabase is a BI tool, empowering developers and entities to better understand their data through
                                            the provision of charts, graphs & other useful metrics that can be integrated with a provided Database. Metabase comes with an incredibly 
                                            assistive & well documented API, allowing devlopers to instantiate and access database instances in a variety of locations.
                                        </p>                                      
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Postman</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/postmanproper.png' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Postman is an application that allows users to create collections 
                                            (and custom environment configurations if need be) of API endpoints 
                                            that can be utilized and tested within a provided GUI.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Sendgrid</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/Sendgrid.png' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Sendgrid allows an entity to send out emails without needing to maintain an internal email server. Developers can create
                                            templates to automate the sending of Emails in correlation to a particular action, event, or state change.
                                            The service also manages technical details such as scaling, and real time analytical insights.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Twilio</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/twilio.jpeg' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                                Twilio is a customer engagement platform that provides a modern communication 
                                                API which developers utilize to handle the delivery of automated SMS messages
                                                and notifications to a userbase, making it easy to establish communications & 
                                                transmit timely & important information.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <div className="footer-image">
                <img src={shape} alt="You seem to be having connection issues." />
            </div>
        </div>
    )
} 