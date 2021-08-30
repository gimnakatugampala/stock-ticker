import React, { useEffect } from 'react'
import './styles.css'

import Table from 'react-bootstrap/Table'

const Summary = ({summary}) => {


    return (
        <div style={{display:'flex',marginTop:'20px'}}>


           <Table striped bordered hover style={{width:'40%',marginRight:'20px'}}>
            <tbody>
                <tr>
                <td>Previous Close</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.previousClose.raw : 'Null'}</td>
                </tr>

                <tr>
                <td>Open</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.open.raw : 'Null'}</td>
                </tr>

                <tr>
                <td>Bid</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.bid.fmt: 'Null'} x {summary?summary.summaryDetail.bidSize.longFmt: 'Null'}</td>
                </tr>

                <tr>
                <td>Ask</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.ask.fmt: 'Null'} x {summary?summary.summaryDetail.askSize.longFmt: 'Null'}</td>
                </tr>

                <tr>
                <td>Day's Range</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.regularMarketDayLow.fmt: 'Null'} - {summary?summary.summaryDetail.regularMarketDayHigh.fmt: 'Null'}</td>
                </tr>

                <tr>
                <td>52 Week Range</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.fiftyTwoWeekLow.fmt: 'Null'} - {summary?summary.summaryDetail.fiftyTwoWeekHigh.fmt: 'Null'}</td>
                </tr>

                <tr>
                <td>Volume</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.volume.longFmt : 'Null'} </td>
                </tr>

                <tr>
                <td>Avg. Volume</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.averageVolume.longFmt : 'Null'} </td>
                </tr>

            </tbody>
            </Table>

            <Table striped bordered hover style={{width:'40%',marginLeft:'20px'}}>
            <tbody>
                <tr>
                <td>Market Cap</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.marketCap.fmt : 'Null'} </td>
                </tr>

                <tr>
                <td>Beta (5Y Monthly)</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.beta.fmt : 'Null'}</td>
                </tr>

                <tr>
                <td>PE Ratio (TTM)</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.trailingPE.fmt : 'Null'}</td>
                </tr>

                <tr>
                <td>Forward PE</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.forwardPE.fmt : 'Null'}</td>
                </tr>

                <tr>
                <td>Currency</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.currency : 'Null'}</td>
                </tr>

                <tr>
                <td>Forward Dividend & Yield</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.trailingAnnualDividendRate.fmt : 'Null'} ({summary?summary.summaryDetail.trailingAnnualDividendYield.fmt : 'Null'})</td>
                </tr>

                <tr>
                <td>Ex-Dividend Date</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.exDividendDate.fmt : 'Null'}</td>
                </tr>

                
                <tr>
                <td>Payout Ratio</td>
                <td style={{fontWeight:'bold'}}>{summary?summary.summaryDetail.payoutRatio.fmt : 'Null'}</td>
                </tr>

            </tbody>
            </Table>

        </div>
    )
}

export default Summary
