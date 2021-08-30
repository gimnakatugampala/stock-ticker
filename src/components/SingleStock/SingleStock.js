import React, { useEffect } from 'react'
import './styles.css'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


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
                            hello
                        </Tab>
                        <Tab eventKey="chart" title="Chart">
                            Hello2
                        </Tab>
                        <Tab eventKey="conversations" title="Conversations">
                          hello3
                        </Tab>
                        <Tab eventKey="statistics" title="Statistics">
                          hello4
                        </Tab>
                        <Tab eventKey="historical-data" title="Historical Data">
                          hello5
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                          hello6
                        </Tab>
                        <Tab eventKey="financials" title="Financials">
                          hello7
                        </Tab>
                        <Tab eventKey="analysis" title="Analysis">
                          hello8
                        </Tab>
                        <Tab eventKey="options" title="Options">
                          hello9
                        </Tab>
                        <Tab eventKey="holders" title="Holders">
                          hello10
                        </Tab>
             </Tabs>
           
        </div>
    )
}

export default SingleStock
