import React from 'react'
import './styles.css'


import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import MajorHolders from './MajorHolders/MajorHolders'
import InsiderTransactions from './InsiderTransactions/InsiderTransactions'

const Holders = ({holders}) => {
    return (
        <div style={{marginTop:'35px'}}>
              <Tabs defaultActiveKey="major-holders" >
                        <Tab eventKey="major-holders" title="Major Holders">
                            <MajorHolders holders={holders} />
                        </Tab>
                        <Tab eventKey="insider-transactions" title="Insider Transactions">
                            <InsiderTransactions holders={holders} />
                        </Tab>
                      
                </Tabs>
        </div>
    )
}

export default Holders
