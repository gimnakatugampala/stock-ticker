import React from 'react'
import './styles.css'

import Table from 'react-bootstrap/Table'


const HistoricalData = ({historics}) => {
    return (
        <div style={{margin:'15px'}}>
            <h5>Historical Data</h5>

            <Table striped bordered hover style={{margin:'15px'}} responsive>
            <thead>
                <tr>
                <th><h6>Date</h6></th>
                <th><h6>Open</h6></th>
                <th><h6>High</h6></th>
                <th><h6>Low</h6></th>
                <th><h6>Close</h6></th>
                <th><h6>Adj Close</h6></th>
                <th><h6>Volume</h6></th>
                
                </tr>
            </thead>
            <tbody>
                
                {historics?historics.prices?.map((history,index) => (
                    <tr key={index}>
                    <td>{history.date? new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(history.date) : 'N/A'}</td>
                    <td>{history.open? history.open.toFixed(2) : 'N/A'}</td>
                    <td>{history.high? history.high.toFixed(2) : 'N/A'}</td>
                    <td>{history.low? history.low.toFixed(2) : 'N/A'}</td>
                    <td>{history.close? history.close.toFixed(2) : 'N/A'}</td>
                    <td>{history.adjclose? history.adjclose.toFixed(2) : 'N/A'}</td>
                    <td>{history.volume? history.volume : 'N/A'}</td>
                    </tr>
                )) : 'N/A'}
               
               
            </tbody>
            </Table>  
        </div>
    )
}

export default HistoricalData
