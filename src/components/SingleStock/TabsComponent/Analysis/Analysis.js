import React from 'react'
import './styles.css'

import Table from 'react-bootstrap/Table'

const Analysis = ({analysis}) => {

    let date = []
    let est = []
    let actual = []
    let diff = []
    let suprices = []

    let earning = []
    let earning2 = []
    let revenues = []

    if(analysis){

        // Date head
        analysis.earningsHistory.history.forEach((d) =>{
        date.push(d.quarter.fmt)
     })

     // EPS EST
     analysis.earningsHistory.history.forEach((es) =>{
        est.push(es.epsEstimate.fmt)
     })

    //  EPS Actual
    analysis.earningsHistory.history.forEach((ac) =>{
        actual.push(ac.epsActual.fmt)
     })

    //  EPS Diff
    analysis.earningsHistory.history.forEach((di) =>{
        diff.push(di.epsDifference.fmt)
     })

    //  Suprices
    analysis.earningsHistory.history.forEach((sup) =>{
        suprices.push(sup.surprisePercent.fmt)
     })


       //  Earning layer 1
    analysis.earningsTrend.trend.forEach((t) =>{
        earning.push(t)
     })

 
    }
    
          // Earning layer 2
          earning.forEach(earn =>{
            earning2.push(earn.earningsEstimate)
        })

           // Revenue
           earning.forEach(revenue =>{
            revenues.push(revenue.revenueEstimate)
        })
    
    
        console.log(revenues)
    
  


    return (
        <div>
            {/* Earnings Estimate */}
           <Table striped bordered hover style={{margin:'15px'}}>
            <thead>
                <tr>
                <th><h6>Earnings History</h6></th>
                {date?date?.map((d,index) => (
                    <th key={index}>{d}</th>
                )) : 'N/A'}
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>EPS Est.</td>
                {est?est?.map((est,index) => (
                    <td key={index}>{est}</td>
                )) : 'N/A'}
               
                </tr>

                <tr>
                <td>EPS Actual</td>
                {actual?actual?.map((a,index) => (
                    <td key={index}>{a}</td>
                )) : 'N/A'}
                </tr>

                <tr>
                <td>Difference</td>
                {diff?diff?.map((d,index) => (
                    <td key={index}>{d}</td>
                )) : 'N/A'}
                </tr>

                <tr>
                <td>Surprise %</td>
                {suprices?suprices?.map((s,index) => (
                    <td key={index}>{s}</td>
                )) : 'N/A'}
                </tr>
            </tbody>
            </Table>


              {/* Earnings Trending */}
           <Table striped bordered hover style={{margin:'15px'}}>
            <thead>
                <tr>
                <th><h6>Earnings Estimate</h6></th>
                {earning?earning?.map((d,index) => (
                    <th key={index}>{d.endDate}</th>
                )) : 'N/A'}
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>No. of Analysts</td>
                {earning2?earning2?.map((est,index) => (
                    <td key={index}>{est.numberOfAnalysts.fmt}</td>
                )) : 'N/A'}
               
                </tr>

                <tr>
                <td>Avg. Estimate</td>
                {earning2?earning2?.map((a,index) => (
                    <td key={index}>{a.avg.fmt}</td>
                )) : 'N/A'}
                </tr>

                <tr>
                <td>Low Estimate</td>
                {earning2?earning2?.map((d,index) => (
                    <td key={index}>{d.low.fmt}</td>
                )) : 'N/A'}
                </tr>

                <tr>
                <td>High Estimate</td>
                {earning2?earning2?.map((s,index) => (
                    <td key={index}>{s.high.fmt}</td>
                )) : 'N/A'}
                </tr>

                <tr>
                <td>Year Ago EPS</td>
                {earning2?earning2?.map((s,index) => (
                    <td key={index}>{s.yearAgoEps.fmt}</td>
                )) : 'N/A'}
                </tr>
            </tbody>
            </Table>
                    
                {/* Earnings Revenue */}
           <Table striped bordered hover style={{margin:'15px'}}>
            <thead>
                <tr>
                <th><h6>Revenue Estimate</h6></th>
                {earning?earning?.map((d,index) => (
                    <th key={index}>{d.endDate}</th>
                )) : 'N/A'}
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>No. of Analysts</td>
                {revenues?revenues?.map((est,index) => (
                    <td key={index}>{est.numberOfAnalysts.fmt}</td>
                )) : 'N/A'}
               
                </tr>

                <tr>
                <td>Avg. Estimate</td>
                {revenues?revenues?.map((a,index) => (
                    <td key={index}>{a.avg.fmt}</td>
                )) : 'N/A'}
                </tr>

                <tr>
                <td>Low Estimate</td>
                {revenues?revenues?.map((d,index) => (
                    <td key={index}>{d.low.fmt}</td>
                )) : 'N/A'}
                </tr>

                <tr>
                <td>High Estimate</td>
                {revenues?revenues?.map((s,index) => (
                    <td key={index}>{s.high.fmt}</td>
                )) : 'N/A'}
                </tr>

                <tr>
                <td>Year Ago Sales</td>
                {revenues?revenues?.map((s,index) => (
                    <td key={index}>{s.yearAgoRevenue ? s.yearAgoRevenue.fmt : 'N/A'}</td>
                )) : 'N/A'}
                </tr>

                
                <tr>
                <td>Sales Growth (year/est)</td>
                {revenues?revenues?.map((s,index) => (
                    <td key={index}>{s.growth? s.growth.fmt : 'N/A'}</td>
                )) : 'N/A'}
                </tr>
            </tbody>
            </Table>       
        </div>

    )
}

export default Analysis
