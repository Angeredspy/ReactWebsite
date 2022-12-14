import React, {useState} from "react";
import Typical from "react-typical"; 
import './Profile.css';
import ScrollService from "../../../Utilities/ScrollService";
import smoothTunes from '../../../Assets/Home/FortressOfLies.mp3'; //Base is ...beneaththemask.mp3

let music = new Audio(smoothTunes)

let play = () => {
  music.play();
} 

let pause = () => {
  music.pause();
}

export default function Profile() {
  const [count, setCount] = useState(1);
  return (
    <div className="profile-container padding-div">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cols">
            <div className="cols-icon">
                <a
                  onClick={() => {
                    if(count % 2 !== 0) {
                      play()
                    } else {
                      pause()
                    }
                    setCount(count+1);
                  }}
                  rel="noreferrer"
                  href="#"
                  title='Enjoy some tunes while youre here!'
                >
                  <i style={{color: "rgb(94, 161, 240)"}} className="fa fa-music"></i>
                </a>
              <a
                href="https://github.com/Angeredspy"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github-alt"></i>
              </a>
              <a
                href="https://destinyboundny.wixsite.com/website"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-heartbeat"></i>
              </a>
              <a
                href="https://www.goodnewsnetwork.org"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-globe"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi! I'm <span className="highlighted-text">Chris</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  steps={[
                    "Tangible Industry Experience",
                    1000,
                    "Graceful Knowledge Application",
                    1000,
                    "Fruitful & Fun Collaboration",
                    1000,
                    "Software Philomath",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                  className="typical-class"
                />
              </h1>
              <span className="profile-role-tagline">
                Tech lover with a knack for front & back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >Hire Me</button>
            <a href="ChristopherGrahamsResume.pdf" download="Chris Graham">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
