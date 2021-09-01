import React from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


import Analysis from './Analysis/Analysis'
import Chart from './Chart/Chart'
import Consersations from './Conversations/Conversations'
import Financials from './Financials/Financials'
import HistoricalData from './Historical-Data/HistoricalData'
import Holders from './Holders/Holders'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import Summary from './Summary/Summary'

const TabsComponent = ({summary,holders,analysis,finances,profile,historics,statistics,conversations,charts}) => {
    return (
        <div>

      <Tabs defaultActiveKey="summary" style={{marginTop:'30px'}}>
          <Tab eventKey="summary" title="Summary">
                {/* {summary? <Summary summary={summary}  /> : 'Loading..'} */}
                
          </Tab>
          <Tab eventKey="chart" title="Chart">
                {charts? <Chart charts={charts} /> : 'Loading..'}

                
          </Tab>
          <Tab eventKey="conversations" title="Conversations">
                {/* {conversations? <Consersations conversations={conversations} /> : 'Loading..' } */}
               
          </Tab>
          <Tab eventKey="statistics" title="Statistics">
                {/* {statistics? <Statistics statistics={statistics} /> : 'Loading..'} */}
                
          </Tab>
          <Tab eventKey="historical-data" title="Historical Data">
                {/* {historics ? <HistoricalData historics={historics} /> : 'Loading..'} */}
                
          </Tab>
          <Tab eventKey="profile" title="Profile">
                {/* {profile? <Profile profile={profile} /> : 'Loading..'} */}
                
          </Tab>
          <Tab eventKey="financials" title="Financials">
                <Financials finances={finances} />
          </Tab>
          <Tab eventKey="analysis" title="Analysis">
                {/* {analysis? <Analysis analysis={analysis} /> : 'Loading..' } */}
                
          </Tab>
          <Tab eventKey="holders" title="Holders">
                {/* {holders? <Holders holders={holders} /> : 'Loading..' } */}
                
          </Tab>
             </Tabs>
            
        </div>
    )
}

export default TabsComponent
