import React, {useState} from "react";
import Typical from "react-typical"; 
import './Profile.css';
import ScrollService from "../../../Utilities/ScrollService";
import smoothTunes from '../../../Assets/Home/Shopping.mp3'; //Base is ...beneaththemask.mp3
import Modal from "react-modal";

let music = new Audio(smoothTunes)

let play = () => {
  music.play();
} 

let pause = () => {
  music.pause();
}

// Binds modal to app element
Modal.setAppElement('#root');

export default function Profile() {
  const [count, setCount] = useState(1);
  const [activeIcon, setActiveIcon] = useState(null);
  const [rowData, setRowData] = useState([]);

    const fetchData = async () => {
    const response = await fetch('/pantries.txt');
    const text = await response.text();
    const lines = text.split('\n');
    setRowData(lines);
  };


  const closeModal = () => {
    setActiveIcon(null);
  };

  const openModal = (icon) => {
    setActiveIcon(icon);
    if (icon === 'spoon') {
      fetchData();
    }
  };
    
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    padding: '2rem',
    position: 'fixed',
    border: '2px solid #4F2781',
    backgroundImage: 'url(/stacked-steps-haikei-2.svg)',
    backgroundSize: 'cover',
    fontFamily: 'Arial, sans-serif',
  },
};

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
                href="https://www.goodnewsnetwork.org"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-globe"></i>
              </a>
              <a
                onClick={() => openModal("spoon")}
                href="#"
                title="Open modal for spoon icon"
              >
                <i className="fa fa-spoon"></i>
          </a>
          <Modal
            isOpen={activeIcon === "spoon"}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Spoon Modal"
            overlayClassName="modal-overlay"
          >
        <h2 style={{ textAlign: 'center', color: '#E7DCAC', fontWeight: 'bold',}}>Mobile Food Pantries</h2>
        <p style={{color: '#E7DCAC'}}>Below you will find a list of locations for upcoming mobile food pantries.</p>
        <p style={{color: '#E7DCAC'}}>Know someone who could use this? Pass it along!</p>
        
        <div style={{color: '#E7DCAC', fontWeight: 'bold',}}>
          {rowData.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <button onClick={closeModal} class="btn-close">Close</button>
      </Modal>
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
                Tech lover & problem solver with a knack for front & back end operations.
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
