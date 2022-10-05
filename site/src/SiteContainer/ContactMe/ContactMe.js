import React, {useState} from 'react';
import imgBack from '../../../src/ContactMeImages/mailz.jpeg';
import load2 from '../../../src/ContactMeImages/load2.gif';
import ScreenHeading from '../../../src/Utilities/ScreenHeading/ScreenHeading.js';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import Typical from 'react-typical';
import './ContactMe.css';

export default function ContactMe(props) {
    
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) 
        return 
        Animations.animations.fadeInScreen(props.id)
    }
        const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [message, setMessage] = useState('')
        const [banner, setBanner] = useState('')
        const [bool, setBool] = useState(false)

        const handleName = (e) => {
            setName(e.target.value);
        }
        const handleEmail = (e) => {
            setEmail(e.target.value);
        }
        const handleMessage = (e) => {
            setMessage(e.target.value);
        }
        console.log(message)


    return (
        <div classname='main-container' id={props.id || ''}>
            <ScreenHeading 
            subHeading={'Lets Keep In Touch!'}
            title={'Contact Me'} />
            <div className='central-form'>
                <div className='col'>
                <h2 className='title'>
                <Typical
                  steps={[
                    "Lets Chat! 💬",
                    2000,
                    "Get In Touch! 📨",
                    2000,
                  ]}
                  loop={Infinity}
                />
              </h2>
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
                <div className='back-form'>
                    <div className='img-back'>
                        <h4>Shoot Me A Message!</h4>
                        <img src={imgBack} alt='image not found'/>
                    </div>
                    <form>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type='text'
                        onChange={handleName}
                        value={name}
                        />

                        <label htmlFor='email'>Email</label>
                        <input type='text'
                        onChange={handleEmail}
                        value={email}
                        />
                        
                        <label htmlFor='message'>Message</label>
                        <textarea type='text'
                        onChange={handleMessage}
                        value={message}
                        />

                        <div className='send-btn'>
                            <button type='submit'>
                                send<i className='fa fa-paper-plane'/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}