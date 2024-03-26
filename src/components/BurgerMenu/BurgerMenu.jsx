import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./BurgerMenu.css";

export default props => {
    return (
        <Menu right {...props}>
            <a className="menu-item" href="/">
                HOME
            </a>
            <a className="menu-item" href="/about">
                ABOUT
            </a>
            <a className="menu-item" href="/gallery">
                GALLERY
            </a>
            <a className="menu-item" href="/blogs">
                BLOGS
            </a>
            <a className="menu-item" href="/matches">
                MATCHES
            </a>
            <a className="menu-item" href="/involved">
                GET INVOLVED
            </a>
            <a className="menu-item" href="/contact">
                CONTACT US
            </a>
        </Menu>
    );
};