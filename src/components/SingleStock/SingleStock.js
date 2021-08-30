import React, { useEffect } from 'react'
import './styles.css'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Analysis from './Analysis/Analysis'
import Chart from './Chart/Chart'
import Consersations from './Conversations/Conversations'
import Financials from './Financials/Financials'
import HistoricalData from './Historical-Data/HistoricalData'
import Holders from './Holders/Holders'
import Options from './Options/Options'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import Summary from './Summary/Summary'


const SingleStock = ({SummaryStockAPi,symbol,setsymbol}) => {

    // const [summary, setsummary] = useState(initialState)

    // useEffect(() => {
    //     SummaryStockAPi(symbol)
    //     .then(data => console.log(data))
    // })

    return (
        <div>
            <div className="container-fuild">
                <h3>Apple Inc. (AAPL)</h3>
                <p>NasdaqGS - NasdaqGS Real Time Price. Currency in USD</p>
                <span style={{display:'flex',margin:'0'}}>
                <h1 style={{marginRight:'10px',fontWeight:'bolder'}}>148.60</h1>  <h5 style={{alignSelf:'center'}}>+1.06  (+0.72%)</h5>
                </span>
                <p style={{marginTop:'-10px',fontSize:'13px',color:'#B8AFAD'}}>At close: August 27 4:00PM EDT</p>
            </div>


            <Tabs defaultActiveKey="summary" style={{marginTop:'30px'}}>
                        <Tab eventKey="summary" title="Summary">
                            <Summary />
                        </Tab>
                        <Tab eventKey="chart" title="Chart">
                            <Chart />
                        </Tab>
                        <Tab eventKey="conversations" title="Conversations">
                          <Consersations />
                        </Tab>
                        <Tab eventKey="statistics" title="Statistics">
                          <Statistics />
                        </Tab>
                        <Tab eventKey="historical-data" title="Historical Data">
                          <HistoricalData />
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                          <Profile />
                        </Tab>
                        <Tab eventKey="financials" title="Financials">
                          <Financials />
                        </Tab>
                        <Tab eventKey="analysis" title="Analysis">
                          <Analysis />
                        </Tab>
                        <Tab eventKey="options" title="Options">
                          <Options />
                        </Tab>
                        <Tab eventKey="holders" title="Holders">
                          <Holders />
                        </Tab>
             </Tabs>
           
        </div>
    )
}

export default SingleStock
