import React from 'react'

const Dashboard = ({summary}) => {
    return (
        <div>
               <div className="container-fuild">
                <h3>{summary?summary.price.longName : 'N/A'} ({summary?summary.price.symbol: 'N/A'})</h3>
                <p>{summary?summary.price.exchangeName: 'N/A'} - {summary?summary.price.quoteSourceName: 'N/A'}. Currency in {summary?summary.price.currency: 'N/A'}</p>
                <span style={{display:'flex',margin:'0'}}>
                <h1 style={{marginRight:'10px',fontWeight:'bolder'}}>{summary?summary.price.regularMarketPrice.fmt: 'N/A'}</h1>  <h5 className={summary?Math.sign(summary.price.regularMarketChange.fmt) === -1 ? 'text-danger' : 'text-success' :'N/A'}  style={{alignSelf:'center'}}>{summary?summary.price.regularMarketChange.fmt: 'N/A'} ({summary?summary.price.regularMarketChangePercent.fmt: 'N/A'})</h5>
                </span>
                <p style={{marginTop:'-10px',fontSize:'13px',color:'#B8AFAD'}}>{summary?new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(summary.price.regularMarketTime): 'N/A'}</p>
            </div>
           
        </div>
    )
}

export default Dashboard
