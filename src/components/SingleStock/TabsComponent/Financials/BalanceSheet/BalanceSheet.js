import React from 'react'
import Table from 'react-bootstrap/Table'


const BalanceSheet = ({finances}) => {
    return (
        <div style={{margin:'15px'}}>
           <h3>Balance Sheet</h3> 
           <Table striped bordered hover>
             <thead>
             <tr>
                 <th>Breakdown</th>
               {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                    <th key={index}>{balance.endDate.fmt}</th>
               )) : 'Null'}
                </tr>
               </thead>
                <tbody>
                        <tr>
                        <td>Accounts Payable</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.accountsPayable.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Cash</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.cash.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Common Stock</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.commonStock.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Inventory</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.inventory.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Long Term Debt</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.longTermDebt.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Long Term Investments</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.longTermInvestments.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Short Long Term Debt</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.shortLongTermDebt.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Short Term Investments</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.shortTermInvestments.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Net Receivables</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.netReceivables.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Net Tangible Assets</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.netTangibleAssets.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Other Assets</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.otherAssets.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Other Current Assets</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.otherCurrentAssets.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Other Current Liabilities</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.otherCurrentLiab.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Other Liabilities</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.otherLiab.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Other Stock Holder Equity</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.otherStockholderEquity.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Property Plant Equipment</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.propertyPlantEquipment.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Retaineed Earnings</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.retainedEarnings.fmt}</td>
                         )) : 'Null'}
                        </tr>

                       
                        <tr>
                        <td>Total Assets</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.totalAssets.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Total Current Assets</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.totalCurrentAssets.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Total Current Liabilities</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.totalCurrentLiabilities.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Total Liabilities</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.totalLiab.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Total Stock Holder Equity</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.totalStockholderEquity.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        <tr>
                        <td>Treasury Stock</td>
                        {finances?finances.balanceSheetHistory.balanceSheetStatements?.map((balance,index) => (
                        <td key={index}>{balance.treasuryStock.fmt}</td>
                         )) : 'Null'}
                        </tr>

                        
                   
                </tbody>
                </Table>


        </div>
    )
}

export default BalanceSheet
