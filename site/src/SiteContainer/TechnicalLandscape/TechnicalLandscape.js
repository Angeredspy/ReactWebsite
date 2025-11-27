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
                                    <h5>Azure OpenAI</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/azure-openai.webp' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Azure OpenAI Service provides enterprise-ready access to OpenAI's powerful language models 
                                            with enterprise-grade security and compliance. It enables the deployment of sophisticated 
                                            AI solutions with secure data access, content filtering, and integration with Azure's ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>LangChain</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/langchain.webp' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            LangChain is a framework for building applications powered by language models. 
                                            It provides tools for creating sophisticated AI chatbots, knowledge retrieval systems, 
                                            and RAG pipelines, making it easier to integrate LLMs into production applications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Databricks</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/databricks.webp' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Databricks is a unified analytics platform that combines data engineering, data science, and machine learning. 
                                            It provides collaborative notebooks and powerful data processing capabilities, enabling teams to build 
                                            scalable data pipelines and extract structured data from complex sources like PDFs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Apache Airflow</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/airflow.webp' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Apache Airflow is an open-source platform for orchestrating complex data workflows. 
                                            It allows developers to programmatically author, schedule, and monitor workflows using 
                                            Python, making it essential for automating data pipelines and ETL processes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Docker & Containerization</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/docker.webp' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Docker revolutionizes application deployment through containerization, packaging applications 
                                            and their dependencies into lightweight, portable containers. This ensures consistent behavior 
                                            across different environments and simplifies the deployment and scaling of modern applications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Next.js</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/nextjs.webp' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Next.js is a powerful React framework that enables server-side rendering, static site generation, 
                                            and hybrid applications. It provides excellent performance optimization, built-in CSS support, 
                                            and seamless API integration, making it ideal for building modern web applications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>Azure DevOps</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/azure-devops.webp' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Azure DevOps provides a comprehensive suite of development tools including version control, 
                                            project management, CI/CD pipelines, and testing frameworks. It enables teams to plan, 
                                            develop, and deploy applications efficiently while maintaining high quality standards.
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
                                    <h5>Metabase</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/Metabase.png' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Metabase is a BI tool, empowering developers and entities to better understand their data through
                                            the provision of charts, graphs & other useful metrics that can be integrated with a provided Database. Metabase comes with an incredibly 
                                            assistive & well documented API, allowing developers to instantiate and access database instances in a variety of locations.
                                        </p>                                      
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='landscape-item'>
                                    <div className='landscape-comment'>
                                    <h5>TablePlus</h5>
                                    <div className='technical-info'>
                                        <img src='../LandscapeImages/TablePlusLogo.png' alt='no internet connection'></img>
                                    </div>
                                        <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            TablePlus is a lightweight, intuitive & secure Database Management System that gives developers the power to
                                            quickly maneuver, manipulate & analyze complex and granular database schemas. It allows for multiple customizable 
                                            Database connections (read-only connections for less technical users for example), and carries support for most popular
                                            relational databases such as PostgreSQL, MongoDB, MSSQL and more! 
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
                                            <h5>Heroku</h5>
                                            <div className='technical-info'>
                                                <img src='../LandscapeImages/heroku.png' alt='no internet connection'></img>                                        
                                            </div>
                                            <p>
                                            <i className='fa fa-lightbulb-o'/>
                                            Heroku is a platform as a service (PaaS) & a Container Solution similar to Docker and AWS containers, that allows developers to build and deploy
                                            scalable applications within virtualized Linux containers named Dynos. Heroku's CLI commands make it
                                            easy to interact with Heroku via the command line.
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
                                            integrated within the Google Workspace.
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