import React from 'react'

const Dashboard = ({summary}) => {
    return (
        <div>
               <div className="container-fuild">
                <h3>{summary.price.longName == undefined ? 'N/A' : summary.price.longName } ({summary.price.symbol == undefined ? 'N/A' : summary.price.symbol})</h3>
                <p>{summary.price.exchangeName == undefined ? 'N/A' : summary.price.exchangeName} - {summary.price.quoteSourceName == undefined ?  'N/A' : summary.price.quoteSourceName}. Currency in {summary.price.currency == undefined ? 'N/A' : summary.price.currency}</p>
                <span style={{display:'flex',margin:'0'}}>
                <h1 style={{marginRight:'10px',fontWeight:'bolder'}}>{summary.price.regularMarketPrice == undefined ?'N/A' : summary.price.regularMarketPrice.fmt}</h1>  <h5 className={summary?Math.sign(summary.price.regularMarketChange.fmt) === -1 ? 'text-danger' : 'text-success' :'N/A'}  style={{alignSelf:'center'}}>{summary.price.regularMarketChange == undefined ? 'N/A' : summary.price.regularMarketChange.fmt} ({summary.price.regularMarketChangePercent == undefined? 'N/A' : summary.price.regularMarketChangePercent.fmt})</h5>
                </span>
                <p style={{marginTop:'-10px',fontSize:'13px',color:'#B8AFAD'}}>{summary?new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(summary.price.regularMarketTime): 'N/A'}</p>
            </div>
           
        </div>
    )
}

export default Dashboard
