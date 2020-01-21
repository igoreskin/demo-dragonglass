import React, { useState, useEffect } from 'react';
import * as actions from '../actions';
import { connect, useDispatch } from 'react-redux';
// import Websocket from 'react-websocket';
import Header from './Header';
import BidContainer from './BidContainer';
import TableContainer from './TableContainer';
import { getBids } from '../reducers';
import { getTransactions } from '../reducers';
import { getUsers } from '../reducers';
// import { getTime } from '../reducers';
// import SockJsClient from 'react-stomp';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

const MainContainer = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchData() }, []);

    useEffect(() => { setTransactions(props.transactions) }, [props.transactions]);
    useEffect(() => { setUserMap(props.users[0]) }, [props.users]);
    useEffect(() => { setConsensusStartInEpoch(Date.now()) }, [props.time]);

    // const contractId = '0.0.143796';
    // const contractId = '0.0. 143766';
    // const contractId = '0.0.143773';
    const apiKey = 'ad63b9a4-d0e7-30b9-8622-69bcdd9166ae';  // This is a testnet apiKey
    const dispatch = useDispatch();
    // const apiKey = '15ca76c8-db77-3a5e-8d70-7fbf9f5c2421';     // This is a mainnet apiKey

    const fetchData = async () => {
        // await props.fetchTransactions(contractId, apiKey);
        await props.fetchEvents(apiKey);
        await props.fetchUsers();
        await props.resetAuction();
        await connect();
    }

    const [transactions, setTransactions] = useState([]);
    const [userMap, setUserMap] = useState({});
    const [winner, setWinner] = useState('');

    const [consensusStartInEpoch, setConsensusStartInEpoch] = useState(Date.now());
    console.log("TIME IN MAIN: ", consensusStartInEpoch);

    console.log("TRANSACTIONS IN MAIN: ", transactions)

    const setTime = async () => {
        // fetchData();
        await props.fetchTransactionsNew(apiKey, consensusStartInEpoch);
    }

    const displayWinner = (data) => {
        const accountId = data.inputValues[0];
        // const accountId = '0.0.112224'
        const winner = userMap[accountId];
        setWinner(winner);
        console.log("THE WINNER IS: ", winner)
    }

   let highestAmount = transactions && transactions[0] ? transactions[0].amount : 0;
    /* ---- NEW FUNCTION ATTEMPTING TO CONNECT TO THE WEBSOCKET ---- */
        const connect = () => {
            const socket = new SockJS('http://localhost:8080/auctioneer');
            const stompClient = Stomp.over(socket);
            stompClient.connect({}, function(frame) {
                // setConnected(true);
                stompClient.subscribe('/queue/bid', function(messageOutput) {
                    let item = {};
                    item["consensusTime"] = messageOutput.transactionID["validStartDate"];
                    item["account"] = messageOutput.inputValues[0];
                    item["amount"] = messageOutput.inputValues[1];
                    highestAmount = messageOutput.inputValues[1];
                    setTransactions([].concat([item]).concat(transactions));
                    dispatch({type: "HIGHESTBID",
                        		payload: item.amount});
                });
                stompClient.subscribe('/queue/auctionEnd', function(messageOutput) {
                      // showMessageOutput(JSON.parse(messageOutput.body));
                      displayWinner(messageOutput.body)
                      console.log(JSON.parse(messageOutput.body));
                  });
            });
        }
        /* -------------------------------------------------------------- */


    return (
        <div className="main">

            <Header />
            <BidContainer /*bids={bids}*/ transactions={transactions} winner={winner} highestAmount={highestAmount} />
            {<TableContainer userMap={userMap} />}

            {/* <SockJsClient url='http://localhost:8080/auctioneer' topics={['/queue/bid', '/queue/auctionEnd']}
            onMessage={(msg) => { console.log("MESSAGE FROM STOMP: ", msg); }} /> */}

            {/* <Websocket url="ws://websocket.url" onMessage={(e, data) => {handleData(data)}} /> */}

            {/* <button onClick={displayWinner}></button> */}
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    bids: getBids(state),
    transactions: getTransactions(state),
    users: getUsers(state),
    // time: getTime(state)
});

export default connect(mapStateToProps, actions)(MainContainer);
