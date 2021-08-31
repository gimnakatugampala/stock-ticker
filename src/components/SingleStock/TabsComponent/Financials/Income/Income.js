import React from 'react'
import Table from 'react-bootstrap/Table'


const Income = ({finances}) => {
    return (
        <div style={{margin:'15px'}}>
        <h3>Income Statement</h3> 
        <Table striped bordered hover>
          <thead>
          <tr>
              <th>Breakdown</th>
            {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                 <th key={index}>{income.endDate.fmt}</th>
            )) : 'Null'}
             </tr>
            </thead>
             <tbody>
                     <tr>
                     <td>Cost Of Revenue</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.costOfRevenue.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Total Revenue</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.totalRevenue.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Gross Profit</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.grossProfit.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Operating Expenses</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.otherOperatingExpenses? income.otherOperatingExpenses.fmt : 'N/A'}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Operating Income</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.operatingIncome.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Income Before Tax</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.incomeBeforeTax.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Income Tax Expense</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.incomeTaxExpense.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Interest Expenses</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.interestExpense.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Net Income</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.netIncome.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Net Income Application To Common Shares</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.netIncomeApplicableToCommonShares.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Net Income from Continuing Operation Net Minority Interest	</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.netIncomeFromContinuingOps.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>EBIT</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.ebit.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Research Development</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.researchDevelopment.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Selling General Administrative</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.sellingGeneralAdministrative.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Total Operating Expenses</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.totalOperatingExpenses.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Total Other Net Income & Expenses </td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.totalOtherIncomeExpenseNet.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     
                
             </tbody>
             </Table>


     </div>
    )
}

export default Income
