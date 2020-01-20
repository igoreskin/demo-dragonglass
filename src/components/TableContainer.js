import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { BidPaginator } from './BidPaginator';
import { getBids } from '../reducers';
import { getTransactions } from '../reducers';

const TableContainer = ({bids=[], transactions=[]}) => {

    const [page, setPage] = useState({
		totalRows: transactions.length,
		rowsPerPage: 5,
		firstRow: 0
    });

    // useEffect(() => {if (bids && bids.length > 0) setPage({ ...page, totalRows: bids.length})}, [bids])
    useEffect(() => {if (transactions[0] && transactions[0].length > 0) setPage({ ...page, totalRows: transactions[0].length})}, [transactions])

    // console.log("BIDS: ", bids)
    console.log("TRANSACTIONS IN TABLE: ", transactions[0])
    // bids.length > 0 && console.log("PAGE: ", page)

	const nextPage = () => {
		setPage({ ...page, firstRow: parseInt(page.firstRow) + parseInt(page.rowsPerPage)});
    };
    
	const prevPage = () => {
        if (parseInt(page.firstRow) - parseInt(page.rowsPerPage) < 0) {
            setPage({ ...page, firstRow: 0});
        } else {
            setPage({ ...page, firstRow: parseInt(page.firstRow) - parseInt(page.rowsPerPage)});
        }
    };
    
	const toBeginning = () => {
		setPage({ ...page, firstRow: 0 })
    };
    
	const toEnd = () => {
		setPage({ ...page, firstRow: (page.totalRows - /*page.totalRows % */page.rowsPerPage) })
    };
    
    let bidsToDisplay = bids.slice(parseInt(page.firstRow), (parseInt(page.firstRow) + parseInt(page.rowsPerPage)));
    let transactionsToDisplay = transactions[0] && transactions[0].slice(parseInt(page.firstRow), (parseInt(page.firstRow) + parseInt(page.rowsPerPage)));

    const rowsToDisplay = /*bidsToDisplay && bidsToDisplay */transactions[0] && transactions[0].length > 0 && transactionsToDisplay && transactionsToDisplay.map(el => {
        return transactions[0] && transactions[0].length > 0 && (
            <Table.Row key={Math.random()}>
                <Table.Cell className="account">{el.payerID}</Table.Cell>
                <Table.Cell className="price" style={{textAlign: "center"}}>{el.amount}</Table.Cell>
                <Table.Cell className="price" style={{textAlign: "right"}}>{el.consensusTime.slice(11, 19)}</Table.Cell>
            </Table.Row>
        )
    });

    return (
        <div className="table-panel">
            <div className="bidding-history">Bidding History</div>

            <div className="table">
                <Table basic='very'>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Bid Account</Table.HeaderCell>
                        <Table.HeaderCell style={{textAlign: "center"}}>Bid Amount</Table.HeaderCell>
                        <Table.HeaderCell style={{textAlign: "right"}}>Bid Time</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {rowsToDisplay}
                    </Table.Body>
                </Table>
                {bids.length > 0 && <BidPaginator page={page} nextPage={nextPage} prevPage={prevPage} toBeginning={toBeginning} toEnd={toEnd} />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    bids: getBids(state),
    transactions: getTransactions(state)
});

export default connect(mapStateToProps)(TableContainer);