import React, { useState } from 'react'; 
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './Resume.css'

export default function Resume (props) {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
  
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-second-sub-heading">
            <span>{props.secondSubHeading ? props.secondSubHeading : ""}</span>
          </div>
        </div>
      );
    };
  
    const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Programming Skills", logoSrc: "programming-skills.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];
  
    
    const programmingSkillsDetails = [
        {skill: 'TypeScript'},
        {skill: 'JavaScript'},
        {skill: 'Azure OpenAI & LangChain'},
        {skill: 'Databricks'},
        {skill: 'Docker & Containerization'},
        {skill: 'Next.js, React'},
        {skill: 'Azure AI Search & DevOps'},
        {skill: 'Apache Airflow'},
        {skill: 'Cypress, Jest'},
        {skill: 'PostgreSQL, T-SQL'},
        {skill: 'Python, C#'},
        {skill: 'Angular, HTML & CSS'}
    ];
  
    const projectDetails = [
        {
            title: 'ChristoSite',
            duration: {fromDate: '2019', toDate: '2022'},
            description: 'ChristoSite showcases my collective technical experience. It utilizes Heroku for deployment & hosting.',
            subHeading: 'Technologies Used: React, JS, Bootstrap',
        },
        {
            title: 'CBook',
            duration: {fromDate: '2021', toDate: '2022'},
            description: 'CBook uses ESBuilds Transpiling & Bundling abilities in the browser. When valid JSX code within the given textarea is submitted, the transpiled es2015 counterpart will be rendered.',
            subHeading: 'Technologies Used: TypeScript, HTML',
        },
        {
            title: 'TestBank',
            duration: {fromDate: '2019', toDate: '2019'},
            description: 'TestBank is a JS web-app developed with strict Agile methodologies. It was created to replace SUNY Albanys test taking software, Blackboard. Users could create, grade and submit exams.',
            subHeading: 'Technologies Used: Firebase, JavaScript',
        },
    ]; 
  
    const resumeDetails = [
      <div className='resume-screen-container' key='education'>
        <ResumeHeading
          heading={'University At Albany, SUNY'}
          subHeading={
            'Bachelor Of Science: Computer Science (Mathematics Concentration)'
          }
          secondSubHeading={
            'Overseer of on campus nonprofit & community service organizations (Purple Threads).'
          }
          fromDate={'2015'}
          toDate={'2019'}
        />
      </div>,

      /* WORK EXPERIENCE */
      <div className='resume-screen-container' key='work-experience'>
        <div className='experience-container'>
          <ResumeHeading
            heading={'Médecins Sans Frontières / Doctors Without Borders'}
            subHeading={'Software Engineer'}
            fromDate={'2022'}
            toDate={'Present'}
          />
          <div className='experience-description'>
            <span className='resume-description-text'>
              ⦿ Designed and deployed an internal AI chatbot using Azure OpenAI
              & LangChain with secure data access and RAG pipelines.
            </span>
            <br />
            <span className='resume-description-text'>
              ⦿ Built Databricks pipelines to extract structured data from PDFs,
              output JSON, and automate reporting to Excel.
            </span>
            <br />
            <span className='resume-description-text'>
              ⦿ Enhanced enterprise search relevance through Azure AI Search
              with custom analyzers, synonym maps, & scoring profiles.
            </span>
            <br />
            <span className='resume-description-text'>
              ⦿ Led migrations across Next.js + Angular frontends, containerized
              deployments, & Python + Apache Airflow automation, & introduced
              Cypress E2E testing.
            </span>
            <br />
          </div>
        </div>
      </div>,

      /* PROGRAMMING SKILLS */
      <div
        className='resume-screen-container programming-skills-container'
        key='programming-skills'
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className='skill-parent' key={index}>
            <div className='heading-bullet'></div>
            <span>{skill.skill}</span>
          </div>
        ))}
      </div>,

      /* PROJECTS */
      <div className='resume-screen-container' key='projects'>
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>,

      /* Interests */
      <div className='resume-screen-container' key='interests'>
        <ResumeHeading
          heading='Artificial Intelligence'
          description='I have a passion for building practical AI solutions that solve real-world problems. Recently, I developed AI RAG chatbots that analyze medical journal articles, providing accurate citations and references to support humanitarian research and decision-making.'
        />
        <ResumeHeading
          heading='Running'
          description='Apart from being a tech enthusiast, I also enjoy running outside of work and consider it to be very therapeutic. Currently, I can run a 5K with a pace of 7 minutes flat per mile!'
        />
        <ResumeHeading
          heading='Dogs'
          description='Perhaps you couldnt tell? The beautiful pup you see above is my 4 year old baby, Merc (short for Mercury).'
        />
      </div>,
    ];
  
    const handleCarousal = (index) => {
      let offsetHeight = 360;
  
      let newCarousalOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../../Assets/Resume/${bullet.logoSrc}`)}
              alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };
    
    const getResumeScreen = () => {
        return (
            <div 
            style={carousalOffsetStyle.style}
            className='resume-details-carousal'
            >
            {resumeDetails.map((resumeDetail) => resumeDetail)}
            </div>
        );
    };

    return (
        <div className='resume-container screen-container fade-in' id={props.id || ''}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                            </div>
                        </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}