import React from 'react'; 
import './Footer.css'

export default Footer = () => {
    return (
        <div className = 'footer-container'>
            <div className='footer-parent'> 
            <img src={require('../../../../public/shape-bg.png')} alt='Footer'></img>
            </div>
        </div>
    )
}