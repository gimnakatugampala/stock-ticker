import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table'

const MajorHolders = ({holders}) => {


    // useEffect(() =>{
    //     console.log(holders)

    // },[holders])

    return (
        <div style={{marginTop:'10px'}}>
            <h5>Major Holders</h5>
            <h6>Breakdown</h6>
            <Table striped bordered hover>
            <tbody>

                <tr>
                <td style={{fontWeight:'bolder'}}>{holders?holders.majorHoldersBreakdown.insidersPercentHeld.fmt :'Null'}</td>
                <td>% of Shares Held by All Insider</td>
                </tr>

                <tr>
                <td style={{fontWeight:'bolder'}}>{holders?holders.majorHoldersBreakdown.institutionsPercentHeld.fmt : 'Null'}</td>
                <td>% of Shares Held by Institutions</td>
                </tr>

                <tr>
                <td style={{fontWeight:'bolder'}}>{holders?holders.majorHoldersBreakdown.institutionsFloatPercentHeld.fmt : 'Null'}</td>
                <td>% of Float Held by Institutions</td>
                </tr>
               
                <tr>
                <td style={{fontWeight:'bolder'}}>{holders?holders.majorHoldersBreakdown.institutionsCount.longFmt :'Null'}</td>
                <td>Number of Institutions Holding Shares</td>
                </tr>

            </tbody>
            </Table>

            <br />

            {/* <h5>Top Institutional Holders</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Holders</th>
                    <th>Shares</th>
                    <th>Date Reported</th>
                    <th>% Out</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {holders.institutionOwnership.ownershipList?.map((tholder,index) =>(
                        <tr key={index}>
                        <td>{tholder.organization}</td>
                        <td>{tholder.position.longFmt}</td>
                        <td>{tholder.reportDate}</td>
                        <td>{tholder.pctHeld.fmt}</td>
                        <td>{tholder.value.longFmt}</td>
                        </tr>
                    ))}
                   
                   
                </tbody>
                </Table>


                <br />

            <h5>Top Mutual Fund Holders</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Holders</th>
                    <th>Shares</th>
                    <th>Date Reported</th>
                    <th>% Out</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {holders.fundOwnership.ownershipList?.map((tholder,index) =>(
                        <tr key={index}>
                        <td>{tholder.organization}</td>
                        <td>{tholder.position.longFmt}</td>
                        <td>{tholder.reportDate}</td>
                        <td>{tholder.pctHeld.fmt}</td>
                        <td>{tholder.value.longFmt}</td>
                        </tr>
                    ))}
                
                
                </tbody>
                </Table> */}

        </div>
    )
}

export default MajorHolders
