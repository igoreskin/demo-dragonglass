import React, { useState } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

const BidContainer = ({ transactions=[], winner='', placeBid }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = () => {
        console.log("CLICKED IN BID CONTAINER")
        placeBid(inputValue);
        setInputValue('');
    }

    return (
        <div className="bid-panel">
            <img className="headphones" alt="headphones" src={require("../img/desktop-hd-bitmap@2x.png")} />

            <div className="bid-info">
                <div className="bose">
                    Bose 995c Wireless Bluetooth Headphones
                    {/* <div className="reset-spacer"></div> */}
                    {/* <button className="reset" onClick={handleReset}>Reset</button> */}
                </div>

                {!winner || winner.length === 0 ?
                <div className="bid-text">
                    <span className="current-bid">Current Bid: </span>
                    <span className="bid-price"><span className="tiny">t</span>ℏ {transactions && transactions.length > 0 && transactions[0].parsedEvents[0].inputValues[1]} </span>
                    {/* <span className="usd">(usd)</span> */}
                </div> :
                <div className="current-bid" style={{marginTop: "20px"}}>Winner: {winner}</div>
                }

                <div className="input-row">
                    <input className="bid-input" placeholder="Enter your bid" value={inputValue} onChange={e => handleChange(e)} />
                    <button className="bid-button" onClick={handleClick} disabled={inputValue===''} >Place Bid</button>
                </div>
            </div>
            
        </div>
    )
}

export default connect(null, actions)(BidContainer);
