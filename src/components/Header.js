import React from 'react';
import '../css/desktopHd.css'

const Header = () => {
    return (
        <div className="header">
            <span className="heading span1">A</span><span className="heading span2">uctioneer</span>
            <span><img className="round-image" src={require("../img/desktop-hd-image@2x.png")} /></span>
        </div>
    )
}

export default Header;
