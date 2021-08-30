import React from 'react'
import './styles.css'


import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import MajorHolders from './MajorHolders/MajorHolders'
import InsiderTransactions from './InsiderTransactions/InsiderTransactions'

const Holders = () => {
    return (
        <div>
              <Tabs defaultActiveKey="major-holders" >
                        <Tab eventKey="major-holders" title="Major Holders">
                            <MajorHolders />
                        </Tab>
                        <Tab eventKey="insider-transactions" title="Insider Transactions">
                            <InsiderTransactions />
                        </Tab>
                      
                </Tabs>
        </div>
    )
}

export default Holders
