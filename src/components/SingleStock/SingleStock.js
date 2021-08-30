import React, { useEffect ,useState} from 'react'
import './styles.css'

import TabsComponent from './TabsComponent/Tabs'



const SingleStock = ({SummaryStockAPi,symbol}) => {

    const [summary, setsummary] = useState(null)

    useEffect(() => {
        SummaryStockAPi(symbol)
        .then(data => {
            setsummary(data)
           
        })
    },[symbol])

    return (
        <div>
            <div className="container-fuild">
                <h3>Apple Inc. (AAPL)</h3>
                <p>NasdaqGS - NasdaqGS Real Time Price. Currency in USD</p>
                <span style={{display:'flex',margin:'0'}}>
                <h1 style={{marginRight:'10px',fontWeight:'bolder'}}>148.60</h1>  <h5 style={{alignSelf:'center'}}>+1.06  (+0.72%)</h5>
                </span>
                <p style={{marginTop:'-10px',fontSize:'13px',color:'#B8AFAD'}}>At close: August 27 4:00PM EDT</p>
            </div>

            <TabsComponent  summary={summary}  />
           
           
        </div>
    )
}

export default SingleStock
