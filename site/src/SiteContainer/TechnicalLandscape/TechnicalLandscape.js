import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';

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
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            Mezmo (formerly LogDNA) gives developers better 
                                            insight in regard to the state of their application by centralizing affiliated logs to 
                                            one singluar location in real time.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='tehnical-info'>
                                        <img src='../LandscapeImages/mezmologo.png' alt='no internet connection'></img>
                                        <h5>Mezmo</h5>
                                        <p>Mezmo is a data platform allowing for better control and routing of real time data.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            AWS provides developers with a 
                                            plethora of cloud computing services, including cloud storage
                                            relational database services, container solutions & much more.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='tehnical-info'>
                                        <img src='../LandscapeImages/AWS.png' alt='no internet connection'></img>
                                        <h5>Amazon Web Services</h5>
                                        <p>AWS is a robust cloud computing platform offering a variety of infrastructure services, such as AWS S3 cloud storage.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            Google Apps Scripts is a service that allows developers to 
                                            imbue business logic with JavaScript to create seamless automations, 
                                            intergrated within the Google Workspace.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='tehnical-info'>
                                        <img src='../LandscapeImages/GoogleAppsScript.svg' alt='no internet connection'></img>
                                        <h5>Google Apps Scripts</h5>
                                        <p>Apps Scripts comes provided with built in libraries & a code editor. This means that automated logic is able to be integrated quickly, and with relative ease.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            Heroku is a platform as a service (PaaS), that allows developers to build and deploy
                                            scalable applications within virtualized Linux containers named Dynos. Herokus CLI commands make it
                                            easy to interact with Heroku via the command line.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='tehnical-info'>
                                        <img src='../LandscapeImages/heroku.png' alt='no internet connection'></img>
                                        <h5>Heroku</h5>
                                        <p>Heroku is a container solution similar to others such as Docker and AWS containers.
                                            Container solutions allow developers to deploy applications on virtualized containers,
                                            ensuring that the application retains its state across all machines it is being run on.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            Metabase is a BI tool, empowering developers & entire organizations to better understand their data through
                                            the provision of charts, graphs & other useful metrics that can be integrated with a provided Database & sufficient Querying skills.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='tehnical-info'>
                                        <img src='../LandscapeImages/Metabase.png' alt='no internet connection'></img>
                                        <h5>Metabase</h5>
                                        <p>As a powerful BI tool, Metabase comes with an incredibly assistive & well documented API
                                            allowing devlopers to instantiate and access database instances in a variety of locations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            Postman is an application that allows users to create collections of API endpoints 
                                            that can be utilized and tested within a provided GUI.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='tehnical-info'>
                                        <img src='../LandscapeImages/postman.jpeg' alt='no internet connection'></img>
                                        <h5>Postman</h5>
                                        <p>Postman allows developers to build and test API's, alongside custom environment configurations.(ex, Staging or Production).</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            Sendgrid allows an entity to send out emails without needing to maintain an internal email server. The service
                                            also manages technical details such as scaling, and real time analytical insight.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='tehnical-info'>
                                        <img src='../LandscapeImages/Sendgrid.png' alt='no internet connection'></img>
                                        <h5>Sendgrid</h5>
                                        <p>Sendgrid allows developers to create templates to automate the sending of Emails in correlation to a particular action, event, or state change.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                                Twilio is a customer engagement platform which handles the delivery of automated SMS messages
                                                and notifications to a userbase, making it easy to transmit timely & important information.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='tehnical-info'>
                                        <img src='../LandscapeImages/twilio.jpeg' alt='no internet connection'></img>
                                        <h5>Twilio</h5>
                                        <p>Twilio provides a modern communication API Used by developers for establishing communications.</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </div>
    )
} 