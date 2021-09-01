import React from 'react'
import './styles.css'

import Table from 'react-bootstrap/Table'


const Statistics = ({statistics}) => {
    return (
        <div>
            {/* Statistics */}
            <Table striped bordered hover style={{margin:'15px'}} responsive>
            <thead>
                <tr>
                <th><h6>Statistics</h6></th>
                </tr>
            </thead>
            <tbody>
                 <tr>
                    <td>52-Week Change <sup>3</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics['52WeekChange'].fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Beta (5Y Monthly)</td>
                   <td>{statistics?statistics.defaultKeyStatistics['beta'].fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>S&P500 52-Week Change <sup>3</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics['SandP52WeekChange'].fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Book Value Per Share (mrq)</td>
                   <td>{statistics?statistics.defaultKeyStatistics.bookValue.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Short Interest</td>
                   <td>{statistics?statistics.defaultKeyStatistics.dateShortInterest.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Quarterly Earnings Growth (yoy)</td>
                   <td>{statistics?statistics.defaultKeyStatistics.earningsQuarterlyGrowth.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Enterprise Value/EBITDA <sup>7</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics.enterpriseToEbitda.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Enterprise Value/Revenue <sup>3</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics.enterpriseToRevenue.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Enterprise Value <sup>3</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics.enterpriseValue.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Float</td>
                   <td>{statistics?statistics.defaultKeyStatistics.floatShares.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Forward Annual Dividend Yield <sup>4</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics.forwardEps.fmt : 'N/A'}%</td>
                </tr>

                <tr>
                    <td>Forward P/E</td>
                   <td>{statistics?statistics.defaultKeyStatistics.forwardPE.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>% Held by Insiders <sup>1</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics.heldPercentInsiders.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>% Held by Institutions <sup>1</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics.heldPercentInstitutions.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Quarterly Earnings Growth (yoy)</td>
                   <td>{statistics?statistics.defaultKeyStatistics.lastFiscalYearEnd.fmt : 'N/A'}</td>
                </tr>
             
                <tr>
                    <td>Most Recent Quarter (mrq)</td>
                   <td>{statistics?statistics.defaultKeyStatistics.mostRecentQuarter.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Net Income Avi to Common (ttm)</td>
                   <td>{statistics?statistics.defaultKeyStatistics.netIncomeToCommon.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Fiscal Year Ends</td>
                   <td>{statistics?statistics.defaultKeyStatistics.nextFiscalYearEnd.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>PEG Ratio (5 yr expected) <sup>1</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics.pegRatio.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>PEG Hint</td>
                   <td>{statistics?statistics.defaultKeyStatistics.priceHint.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Price/Book (mrq)</td>
                   <td>{statistics?statistics.defaultKeyStatistics.priceToBook.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Profit Margin</td>
                   <td>{statistics?statistics.defaultKeyStatistics.profitMargins.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Shares Outstanding <sup>5</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics.sharesOutstanding.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Short % of Shares Outstanding (Aug 12, 2021) <sup>4</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics.sharesPercentSharesOut.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Shares Short (prior month Jul 14, 2021) <sup>4</sup></td>
                   <td>{statistics?statistics.defaultKeyStatistics.sharesShort.fmt : 'N/A'}</td>
                </tr>

                <tr>
                    <td>Shares Short Ratio </td>
                   <td>{statistics?statistics.defaultKeyStatistics.shortRatio.fmt : 'N/A'}</td>
                </tr>

               
            </tbody>
            </Table>


         
         

        </div>
    )
}

export default Statistics
