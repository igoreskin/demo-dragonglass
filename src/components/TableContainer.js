import React, { useState } from 'react';
import { Table } from 'semantic-ui-react';
import { BidPaginator } from './BidPaginator';

const TableContainer = ({bids}) => {

    const [page, setPage] = useState({
		totalRows: bids.length,
		rowsPerPage: 5,
		firstRow: 0
    });

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
    
    let bidsToDisplay = bids.slice(parseInt(page.firstRow), (parseInt(page.firstRow) + parseInt(page.rowsPerPage)))

    const rowsToDisplay = bidsToDisplay && bidsToDisplay.map(bid => {
        return (
            <Table.Row key={Math.random()}>
                <Table.Cell className="account">{bid.account}</Table.Cell>
                <Table.Cell className="price" style={{textAlign: "center"}}>{bid.amount}</Table.Cell>
                <Table.Cell className="price" style={{textAlign: "right"}}>{bid.time}</Table.Cell>
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
                <BidPaginator page={page} nextPage={nextPage} prevPage={prevPage} toBeginning={toBeginning} toEnd={toEnd} />
            </div>
        </div>
    )
}

export default TableContainer;