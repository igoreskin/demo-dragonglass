import React from 'react';

const BidContainer = ({/*bids=[] */transactions=[]}) => {
    return (
        <div className="bid-panel">
            <img className="headphones" alt="headphones" src={require("../img/desktop-hd-bitmap@2x.png")} />

            <div className="bid-info">
                <div className="bose">Bose 995c Wireless Bluetooth Headphones</div>
                <div className="bid-text">
                    <span className="current-bid">Current Bid: </span>
                    {/* <span className="bid-price">${bids.length > 0 && bids[0].amount} </span> */}
                    <span className="bid-price">${transactions[0] && transactions[0].length > 0 && transactions[0][0].amount} </span>
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
