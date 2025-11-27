import React, { useState } from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './GitActivity.css';

export default function GitActivity(props) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const gitImages = [
        {
            src: process.env.PUBLIC_URL + '/git/git2023.png',
            alt: '2023 Git Activity',
            year: '2023'
        },
        {
            src: process.env.PUBLIC_URL + '/git/git2024.png', 
            alt: '2024 Git Activity',
            year: '2024'
        },
        {
            src: process.env.PUBLIC_URL + '/git/git2025.png',
            alt: '2025 Git Activity', 
            year: '2025'
        }
    ];

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => 
            prevIndex === gitImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => 
            prevIndex === 0 ? gitImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='git-activity-container screen-container fade-in' id={props.id || ''}>
            <div className='git-activity-content'>
                <ScreenHeading 
                    title={'Development Activity'} 
                    subHeading={'Lead maintainer for the Science Portal'}
                />
                
                <div className='git-activity-description'>
                    <p>
                        As the <strong>Lead developer and maintainer of <a href="https://scienceportal.msf.org" target="_blank" rel="noopener noreferrer">Scienceportal.msf.org</a></strong> at Médecins Sans Frontières, 
                        I've continuously enhanced the platform's capabilities and user experience across multiple years of active development. 
                        This includes implementing WYSIWYG functionality for non-technical administrators, integrating Mouseflow analytics for usage tracking, 
                        and developing comprehensive features that enable better communication between users and site administrators. 
                        The visualizations below demonstrate consistent development activity and technical contributions to this mission-critical humanitarian platform.
                    </p>
                </div>

                <div className='git-activity-gallery'>
                    <div className='git-main-image'>
                        <img 
                            src={gitImages[selectedImageIndex].src} 
                            alt={gitImages[selectedImageIndex].alt}
                            className='git-screenshot'
                        />
                        <div className='git-image-controls'>
                            <button className='git-nav-btn prev' onClick={handlePrevImage}>
                                <i className='fa fa-chevron-left'></i>
                            </button>
                            <span className='git-image-year'>{gitImages[selectedImageIndex].year}</span>
                            <button className='git-nav-btn next' onClick={handleNextImage}>
                                <i className='fa fa-chevron-right'></i>
                            </button>
                        </div>
                    </div>
                    
                    <div className='git-thumbnails'>
                        {gitImages.map((image, index) => (
                            <div 
                                key={index}
                                className={`git-thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                                onClick={() => handleImageClick(index)}
                            >
                                <img src={image.src} alt={image.alt} />
                                <span className='thumbnail-year'>{image.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}