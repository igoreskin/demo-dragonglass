import React from 'react';
import '../css/desktopHd.css'

const Header = () => {
    return (
        <div className="header">
            <div className="heading span1">A</div><div className="heading span2">uctioneer</div>
            <div className="spacer"></div>
            <img className="round-image" src={require("../img/desktop-hd-image@2x.png")} />
            <div className="bidder">Ricky Bidder</div>
            <img className="arrow-down" src={require("../img/desktop-hd-u21b3ud83cudf08-color-1@2x.png")} />
        </div>
    )
}

export default Header;
