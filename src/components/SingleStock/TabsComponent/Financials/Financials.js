import React from 'react'
import './styles.css'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import BalanceSheet from './BalanceSheet/BalanceSheet'
import CashFlow from './CashFlow/CashFlow'
import Income from './Income/Income'


const Financials = ({finances}) => {
    return (
        <div>
             <Tabs defaultActiveKey="income" style={{marginTop:'30px'}}>
          <Tab eventKey="income" title="Income">
                <Income finances={finances}  />
          </Tab>
          <Tab eventKey="cash-flow" title="Cash Flow">
                <CashFlow finances={finances}  />
          </Tab>
          <Tab eventKey="balance-sheet" title="Balance Sheet">
                <BalanceSheet finances={finances} />
          </Tab>
         
             </Tabs>
        </div>
    )
}

export default Financials
