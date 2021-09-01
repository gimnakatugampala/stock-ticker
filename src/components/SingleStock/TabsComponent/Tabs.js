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

const TabsComponent = ({summary,holders,analysis,finances,profile}) => {
    return (
        <div>

      <Tabs defaultActiveKey="summary" style={{marginTop:'30px'}}>
          <Tab eventKey="summary" title="Summary">
                <Summary summary={summary}  />
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
                <Profile profile={profile} />
          </Tab>
          <Tab eventKey="financials" title="Financials">
                <Financials finances={finances} />
          </Tab>
          <Tab eventKey="analysis" title="Analysis">
                <Analysis analysis={analysis} />
          </Tab>
          <Tab eventKey="holders" title="Holders">
                <Holders holders={holders} />
          </Tab>
             </Tabs>
            
        </div>
    )
}

export default TabsComponent
