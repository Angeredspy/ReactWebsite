import React from 'react'; 

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='cols'>
                        <a href ='https://github.com/Angeredspy'>
                            <i className ='fa fa-github-alt'></i>
                        </a>
                        <a href ='https://destinyboundny.wixsite.com/website'>
                            <i className ='fa fa-plus-square'></i>
                        </a>
                        <a href ='https://www.goodnewsnetwork.org'>
                            <i className ='fa fa-globe'></i>
                        </a>
                    </div>
                    <div classname='profile-details-name'>
                        <span className='primary-text'>
                            {' '}
                            Hi! I'm <span className='highlighted-text'>Chris</span>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}