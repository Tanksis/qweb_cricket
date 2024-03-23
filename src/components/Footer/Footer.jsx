import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/twitter'
import 'react-social-icons/mailto'

export default function Footer() {
    return (
        <div>
            <div className="pre-footer">
                <div className="pre-footer-container">
                    <SocialIcon url="https://www.instagram.com/queens_cricket" fgColor="#f1f2f2" bgColor="#908982" />
                    <SocialIcon url="https://www.twitter.com" fgColor="#f1f2f2" bgColor="#908982" />
                    <SocialIcon url="mailto:cricketclubqueens@gmail.com" fgColor="#f1f2f2" bgColor="#908982" />
                </div>
            </div>
            <footer>
                <div className="inner-footer">
                    <div className="site-info">
                        <span>
                            Kingston, Ontario, Canada
                            <a href="mailto:cricketclubqueens@gmail.com" className="site-email">cricketclubqueens@gmail.com</a>
                        </span>
                    </div>
                </div>
            </footer>
            
        </div>
    );
}