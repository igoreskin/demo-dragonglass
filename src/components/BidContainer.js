import React from 'react';

const BidContainer = () => {
    return (
        <div className="bid-panel">
            <img className="headphones" src={require("../img/desktop-hd-bitmap@2x.png")} />

            <div className="bid-info">
                <div className="bose">Bose 995c Wireless Bluetooth Headphones</div>
                <div className="bid-text">
                    <span className="current-bid">Current Bid: </span>
                    <span className="bid-price">$27.50 </span>
                    <span className="usd">(usd)</span>
                </div>
                <div className="input-row">
                    <input className="bid-input" placeholder="Enter your bid" />
                    <button className="bid-button">Place Bid</button>
                </div>
            </div>
            
        </div>
    )
}

export default BidContainer;
