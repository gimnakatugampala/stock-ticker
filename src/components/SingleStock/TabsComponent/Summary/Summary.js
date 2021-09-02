import React, { useEffect } from 'react'
import './styles.css'

import Table from 'react-bootstrap/Table'

const Summary = ({summary}) => {


    return (
        <div style={{display:'flex',marginTop:'20px'}}>


           <Table striped bordered hover style={{width:'40%',marginRight:'20px'}} responsive>
            <tbody>
                <tr>
                <td>Previous Close</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.previousClose == undefined ?  'Loading..' : summary.summaryDetail.previousClose.raw}</td>
                </tr>

                <tr>
                <td>Open</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.open == undefined ? 'Loading..' : summary.summaryDetail.open.raw}</td>
                </tr>

                <tr>
                <td>Bid</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.bid == undefined ? 'Loading..' : summary.summaryDetail.bid.fmt} x {summary.summaryDetail.bidSize == undefined ? 'Loading..' : summary.summaryDetail.bidSize.longFmt}</td>
                </tr>

                <tr>
                <td>Ask</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.ask == undefined ? 'Loading..' : summary.summaryDetail.ask.fmt} x {summary.summaryDetail.askSize == undefined ? 'Loading..':summary.summaryDetail.askSize.longFmt}</td>
                </tr>

                <tr>
                <td>Day's Range</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.regularMarketDayLow == undefined? 'Loading..' : summary.summaryDetail.regularMarketDayLow.fmt} - {summary.summaryDetail.regularMarketDayHigh == undefined ? 'Loading..' : summary.summaryDetail.regularMarketDayHigh.fmt}</td>
                </tr>

                <tr>
                <td>52 Week Range</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.fiftyTwoWeekLow == undefined ? 'Loading..' : summary.summaryDetail.fiftyTwoWeekLow.fmt} - {summary.summaryDetail.fiftyTwoWeekHigh == undefined ? 'Loading..' : summary.summaryDetail.fiftyTwoWeekHigh.fmt}</td>
                </tr>

                <tr>
                <td>Volume</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.volume == undefined ? 'Loading..' : summary.summaryDetail.volume.longFmt} </td>
                </tr>

                <tr>
                <td>Avg. Volume</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.averageVolume == undefined ?  'Loading..' : summary.summaryDetail.averageVolume.longFmt} </td>
                </tr>

            </tbody>
            </Table>

            <Table striped bordered hover style={{width:'40%',marginLeft:'20px'}}>
            <tbody>
                <tr>
                <td>Market Cap</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.marketCap == undefined ?  'Loading..' : summary.summaryDetail.marketCap.fmt} </td>
                </tr>

                <tr>
                <td>Beta (5Y Monthly)</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.beta == undefined ?  'Loading..' : summary.summaryDetail.beta.fmt}</td>
                </tr>

                <tr>
                <td>PE Ratio (TTM)</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.trailingPE == undefined ? 'Loading..' : summary.summaryDetail.trailingPE.fmt}</td>
                </tr>

                <tr>
                <td>Forward PE</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.forwardPE == undefined ? 'Loading..' : summary.summaryDetail.forwardPE.fmt }</td>
                </tr>

                <tr>
                <td>Currency</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.currency == undefined ? 'Loading..' : summary.summaryDetail.currency }</td>
                </tr>

                <tr>
                <td>Forward Dividend & Yield</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.trailingAnnualDividendRate == undefined ?  'Loading..' : summary.summaryDetail.trailingAnnualDividendRate.fmt} ({summary.summaryDetail.trailingAnnualDividendYield == undefined ?  'Loading..' : summary.summaryDetail.trailingAnnualDividendYield.fmt})</td>
                </tr>

                <tr>
                <td>Ex-Dividend Date</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.exDividendDate == undefined ?  'Loading..' : summary.summaryDetail.exDividendDate.fmt}</td>
                </tr>

                
                <tr>
                <td>Payout Ratio</td>
                <td style={{fontWeight:'bold'}}>{summary.summaryDetail.payoutRatio == undefined ? 'Loading..' : summary.summaryDetail.payoutRatio.fmt}</td>
                </tr>

            </tbody>
            </Table>

        </div>
    )
}

export default Summary
