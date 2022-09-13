import React from 'react'; 
import Typical from 'react-typical';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='spacer layer1 profile-details'>
                    <div className='cols'>
                        <a href ='https://github.com/Angeredspy' target='_blank' rel='noreferrer'>
                            <i className ='fa fa-github-alt'></i>
                        </a>
                        <a href ='https://destinyboundny.wixsite.com/website'  rel='noreferrer' target='_blank'>
                            <i className ='fa fa-plus-square'></i>
                        </a>
                        <a href ='https://www.goodnewsnetwork.org' target='_blank' rel='noreferrer'>
                            <i className ='fa fa-globe'></i>
                        </a>
                    </div>
                    <div classname='profile-details-name'>
                        <span className='primary-text'>
                            {' '}
                            Hi! I'm <span className='highlighted-text'>Chris</span>
                        </span>
                    </div> 
                    <div className='profile-detials-role'>
                        <span className='primary-text'>
                            {' '}
                            <h1>
                                {' '}
                                <Typical
                                steps={[
                                    "Tangible Industry Experience", 
                                    1000, 
                                    "Graceful Knowledge Application", 
                                    1000, 
                                    "Fluid, Fruitful & Fun Collaboration", 
                                    1000, 
                                    "Everlearning Developer", 
                                    2000
                                ]}
                                loop={Infinity}
                                wrapper="p"
                                className='typical-class'
                                />
                            </h1>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}