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
                 <th key={index}>{income.endDate.fmt?income.endDate.fmt:'N/A'}</th>
            )) : 'Null'}
             </tr>
            </thead>
             <tbody>
                     <tr>
                     <td>Cost Of Revenue</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.costOfRevenue == undefined ?'N/A' : income.costOfRevenue.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Total Revenue</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.totalRevenue == undefined?'N/A': income.totalRevenue.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Gross Profit</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.grossProfit == undefined?'N/A' : income.grossProfit.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Operating Expenses</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.otherOperatingExpenses == undefined?  'N/A': income.otherOperatingExpenses.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Operating Income</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.operatingIncome == undefined?'N/A':income.operatingIncome.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Income Before Tax</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.incomeBeforeTax == undefined?'N/A':income.incomeBeforeTax.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Income Tax Expense</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.incomeTaxExpense == undefined?'N/A':income.incomeTaxExpense.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Interest Expenses</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.interestExpense == undefined?'N/A':income.interestExpense.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Net Income</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.netIncome == undefined?'N/A':income.netIncome.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Net Income Application To Common Shares</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.netIncomeApplicableToCommonShares == undefined?'N/A':income.netIncomeApplicableToCommonShares.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Net Income from Continuing Operation Net Minority Interest	</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.netIncomeFromContinuingOps == undefined?'N/A':income.netIncomeFromContinuingOps.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>EBIT</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.ebit == undefined?'N/A':income.ebit.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Research Development</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.researchDevelopment == undefined?'N/A':income.researchDevelopment.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Selling General Administrative</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.sellingGeneralAdministrative == undefined?'N/A':income.sellingGeneralAdministrative.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Total Operating Expenses</td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.totalOperatingExpenses == undefined?'N/A':income.totalOperatingExpenses.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     <tr>
                     <td>Total Other Net Income & Expenses </td>
                     {finances?finances.incomeStatementHistory.incomeStatementHistory?.map((income,index) => (
                     <td key={index}>{income.totalOtherIncomeExpenseNet == undefined?'N/A':income.totalOtherIncomeExpenseNet.fmt}</td>
                      )) : 'Null'}
                     </tr>

                     
                
             </tbody>
             </Table>


     </div>
    )
}

export default Income
