import React from 'react'
import Table from 'react-bootstrap/Table'


const CashFlow = ({finances}) => {
    return (
        <div style={{margin:'15px'}}>
        <h3>Cash Flow</h3> 
        <Table striped bordered hover>
          <thead>
          <tr>
              <th>Cash Flow</th>
            {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                 <th key={index}>{cash.endDate.fmt?cash.endDate.fmt : 'N/A'}</th>
            )) : 'Null'}
             </tr>
            </thead>
             <tbody>
                     <tr>
                     <td>Capital Expenditures</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.capitalExpenditures == undefined? 'N/A' : cash.capitalExpenditures.fmt }</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Change in Cash</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.changeInCash == undefined? 'N/A' : cash.changeInCash.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Change To Account Receivables</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.changeToAccountReceivables == undefined? 'N/A' :cash.changeToAccountReceivables.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Change To Inventory</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.changeToInventory == undefined?'N/A':cash.changeToInventory.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Change To Liabilities</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.changeToLiabilities == undefined?'N/A':cash.changeToLiabilities.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Change To Net Income</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.changeToNetincome == undefined ? 'N/A': cash.changeToNetincome.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Change To Operating Activites</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.changeToOperatingActivities == undefined? 'N/A':cash.changeToOperatingActivities.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Depreciation</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.depreciation == undefined ? 'N/A': cash.depreciation.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Devidends Paid</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.dividendsPaid == undefined ? 'N/A' : cash.dividendsPaid.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Investments</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.investments == undefined ? 'N/A':cash.investments.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Inssurance of Stock</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.issuanceOfStock == undefined? 'N/A' :cash.issuanceOfStock.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Net Borrowings</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.netBorrowings == undefined ? 'N/A':cash.netBorrowings.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Net Income</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.netIncome == undefined ?'N/A':cash.netIncome.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Other Cash Flows from Financing Activities</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.otherCashflowsFromFinancingActivities == undefined ? 'N/A' : cash.otherCashflowsFromFinancingActivities.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Other Cash Flows from Investments Activities</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.otherCashflowsFromInvestingActivities == undefined ? 'N/A' : cash.otherCashflowsFromInvestingActivities.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Re-Parchase of Stock</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.repurchaseOfStock == undefined ? 'N/A' : cash.repurchaseOfStock.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Total Cash from Financing Activities</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.totalCashFromFinancingActivities == undefined ? 'N/A' : cash.totalCashFromFinancingActivities.fmt}</td>
                      )) : 'Null'}
                     </tr>

                    
                     <tr>
                     <td>Total Cash from Operating Activities</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.totalCashFromOperatingActivities == undefined ? 'N/A' : cash.totalCashFromOperatingActivities.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Total Cash Flow From Investing Activities</td>
                     {finances?finances.cashflowStatementHistory.cashflowStatements?.map((cash,index) => (
                     <td key={index}>{cash.totalCashflowsFromInvestingActivities == undefined ? 'N/A' : cash.totalCashflowsFromInvestingActivities.fmt}</td>
                      )) : 'Null'}
                     </tr>
  
                
             </tbody>
             </Table>


     </div>
    )
}

export default CashFlow
