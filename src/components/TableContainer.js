import React from 'react';
import { Table, Button } from 'semantic-ui-react';

const TableContainer = () => {
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
                    <Table.Row>
                        <Table.Cell className="account">568721</Table.Cell>
                        <Table.Cell className="price" style={{textAlign: "center"}}>27.00</Table.Cell>
                        <Table.Cell className="price" style={{textAlign: "right"}}>22:18:45</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell className="account">287364</Table.Cell>
                        <Table.Cell className="price" style={{textAlign: "center"}}>26.59</Table.Cell>
                        <Table.Cell className="price" style={{textAlign: "right"}}>21:45:22</Table.Cell>
                    </Table.Row>
                    {/*<Table.Row>
                        <Table.Cell>Jill</Table.Cell>
                        <Table.Cell>Denied</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row> */}
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default TableContainer;