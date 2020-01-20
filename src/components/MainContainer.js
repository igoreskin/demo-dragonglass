import React, { useState, useEffect } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Websocket from 'react-websocket';
import Header from './Header';
import BidContainer from './BidContainer';
import TableContainer from './TableContainer';
import { getBids } from '../reducers';
import { getTransactions } from '../reducers';
import SockJsClient from 'react-stomp';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

const MainContainer = (props) => {

    useEffect(() => { fetchData() }, []);

    useEffect(() => { setBids(props.bids) }, [props.bids]);
    useEffect(() => { setTransactions(props.transactions) }, [props.transactions]);

    // const contractId = '0.0.143796';
    const contractId = '0.0.143766';
    // const contractId = '0.0.143773';
    const apiKey = 'ad63b9a4-d0e7-30b9-8622-69bcdd9166ae';  // This is a testnet apiKey
    // const apiKey = '15ca76c8-db77-3a5e-8d70-7fbf9f5c2421';     // This is a mainnet apiKey

    const fetchData = async () => {
        await props.fetchBids();
        await props.fetchTransactions(contractId, apiKey);
        await connect();
    }

    const [bids, setBids] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const handleData = (data) => {
        console.log(JSON.parse(data))
    }

    props.transactions && console.log('TRANSACTIONS IN MAIN: ', props.transactions)

    /* ---- NEW FUNCTION ATTEMPTING TO CONNECT TO THE WEBSOCKET ---- */
    const connect = () => {
        const socket = new SockJS('http://localhost:8080');
        const stompClient = Stomp.over(socket);  
        stompClient.connect({}, function(frame) {
            // setConnected(true);
            console.log('Connected: ' + frame);
            stompClient.subscribe('/queue/bid', function(messageOutput) {
                // showMessageOutput(JSON.parse(messageOutput.body));
                console.log(JSON.parse(messageOutput.body));
            });
        });
    }
    /* -------------------------------------------------------------- */

    return (
        <div className="main">

            <Header />
            {<BidContainer /*bids={bids}*/ transactions={transactions} />}
            {<TableContainer />}

            {/* <SockJsClient url='http://localhost:8080/ws' topics={['/topics/all']}
            onMessage={(msg) => { console.log("MESSAGE FROM STOMP: ", msg); }} /> */}

            {/* <Websocket url="ws://websocket.url" onMessage={(e, data) => {handleData(data)}} /> */}
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    bids: getBids(state),
    transactions: getTransactions(state)
});

export default connect(mapStateToProps, actions)(MainContainer);
