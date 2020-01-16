import React, { useState, useEffect } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Websocket from 'react-websocket';
import Header from './Header';
import BidContainer from './BidContainer';
import TableContainer from './TableContainer';
import { getBids } from '../reducers';

const MainContainer = (props) => {

    useEffect(() => { fetchData() }, []);

    useEffect(() => { setBids(props.bids) }, [props.bids])

    const fetchData = async () => {
        await props.fetchBids();
    }

    // console.log("BIDS IN MAIN CONTAINER: ", bids)

    const [bids, setBids] = useState([]);

    const handleData = (data) => {
        console.log(JSON.parse(data))
    }

    return (
        <div className="main">

            <Header />
            {bids.length > 0 && <BidContainer bids={bids} />}
            {bids.length > 0 && <TableContainer bids={bids} />}

            {/* <Websocket url="ws://websocket.url" onMessage={(e, data) => {handleData(data)}} /> */}
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    bids: getBids(state)
});

export default connect(mapStateToProps, actions)(MainContainer);
