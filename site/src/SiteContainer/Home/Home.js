import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';
import Header from './Header/Header';

export default function Home(props) {
    return (
        <div className='home-container' id={props.id || ''}>
            {/* Holiday snowflakes — hidden for now, may reuse later
            <div className="snowflakes">
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❄</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
            </div>
            */}
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    )
}