import React from 'react';
import './header.css';

const Header = ({history,onClick,toggleState}) => {
    this.brandClassName = `header__brand ${toggleState}`;
    return (
        <header>
            <div className={this.brandClassName}>
                <a href="/">
                    <img src="./assets/images/logo.svg" alt=""/>
                </a>
            </div>
            <div className="header__collapsable">
                <button type="button" onClick={onClick}>
                    <span></span>
                </button>
            </div>
        </header>
    )
} 

export default Header