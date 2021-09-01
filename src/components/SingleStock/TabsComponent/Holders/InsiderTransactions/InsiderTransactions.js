import React from 'react'

import Table from 'react-bootstrap/Table'

const InsiderTransactions = ({holders}) => {
    return (
        <div>
            <h5 style={{margin:'15px'}}>Insider Transaction</h5>
            <Table striped bordered hover responsive>
            <thead>
                    <tr>
                    <th>Insider</th>
                    <th>Transaction</th>
                    <th>Type</th>
                    <th>Value</th>
                    <th>Date</th>
                    <th>Shares</th>
                    </tr>
                </thead>
            <tbody>
                {holders?holders.insiderTransactions.transactions?.map((holder,index) => (
                        <tr key={index}>
                        <td>{holder.filerName} <span style={{color:'#0d6efd'}}> ({holder.filerRelation})</span></td>
                        <td>{holder.transactionText === null ? '' : holder.transactionText}</td>
                        <td>{holder.ownership === 'D' ? 'Direct' : 'Indirect'}</td>
                        <td>{holder.value === undefined ? '' : holder.value.longFmt}</td>
                        <td>{holder.startDate.fmt}</td>
                        <td>{holder.shares.longFmt}</td>
                        </tr>
                    )) : 'Null'}
              
                
            </tbody>
            </Table>
        </div>
    )
}

export default InsiderTransactions
