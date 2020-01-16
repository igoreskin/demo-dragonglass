import React, { useState } from 'react';
import Websocket from 'react-websocket';
import Header from './Header';

const MainContainer = () => {

    const [bids, setBids] = useState([]);

    const handleData = (data) => {
        console.log(JSON.parse(data))
    }

    return (
        <div className="main">

            <Header />

            <Websocket url="ws://websocket.url" onMessage={(e, data) => {handleData(data)}} />
            
        </div>
    )
}

export default MainContainer;
