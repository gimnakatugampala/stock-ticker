import React, { useEffect ,useState} from 'react'
import './styles.css'

import TabsComponent from './TabsComponent/Tabs'
import Dashboard from './Dashboard/Dashboard'



const SingleStock = ({ChartStockAPI,ConversationnStockAPI,StatisticStockAPI,HistoricStockAPI,ProfileStockAPI,FinancialStockAPI,AnalysisStockAPI,HoldersStockAPI,SummaryStockAPi,symbol}) => {

    const [summary, setsummary] = useState(null)
    const [holders, setholders] = useState(null)
    const [analysis, setanalysis] = useState(null)
    const [finances, setfinances] = useState(null)
    const [profile, setprofile] = useState(null)
    const [historics, sethistorics] = useState(null)
    const [statistics, setstatistics] = useState(null)
    const [conversations, setconversations] = useState(null)
    const [charts, setcharts] = useState(null)

    useEffect(() => {

        // Get Summary API
        SummaryStockAPi(symbol)
        .then(data => {
            setsummary(data)
            console.log(data)
        })

          // Conversations Data
          ConversationnStockAPI(symbol)
          .then(data => {
              setconversations(data)
           //    console.log(data)
          })

      

    

        setTimeout(() => {

               // Statistics data
           StatisticStockAPI(symbol)
           .then(data => {
               setstatistics(data)
            //    console.log(data)
           })

             // Get Financial Data
          FinancialStockAPI(symbol)
          .then(data => {
              setfinances(data)
              console.log(data)
          })

        //   Chart Data
          ChartStockAPI(symbol)
          .then(data => {
            setcharts(data.chart.result[0])
            console.log(data.chart.result[0])
        })

        },4000)

        setTimeout(() => {


                 // Get Holders Data
        HoldersStockAPI(symbol)
        .then(data => {
            setholders(data)
            // console.log(data)
        })

        HistoricStockAPI(symbol)
        .then(data => {
            sethistorics(data)
            // console.log(data)
        })

    },7000)

         
  
         
          setTimeout(() =>{
             // Get Profile Data
          ProfileStockAPI(symbol)
          .then(data => {
              setprofile(data)
              // console.log(data)
          })

          },10000)


            
          
          setTimeout(() => {
            // Get Analysis Data
            AnalysisStockAPI(symbol)
            .then(data => {
                setanalysis(data)
                // console.log(data)
            })


        },30000)
       

    },[symbol])


    return (
        <div>
            {/* <div className="container-fuild">
                <h3>{summary?summary.price.longName : 'N/A'} ({summary?summary.price.symbol: 'N/A'})</h3>
                <p>{summary?summary.price.exchangeName: 'N/A'} - {summary?summary.price.quoteSourceName: 'N/A'}. Currency in {summary?summary.price.currency: 'N/A'}</p>
                <span style={{display:'flex',margin:'0'}}>
                <h1 style={{marginRight:'10px',fontWeight:'bolder'}}>{summary?summary.price.regularMarketPrice.fmt: 'N/A'}</h1>  <h5 className={summary?Math.sign(summary.price.regularMarketChange.fmt) === -1 ? 'text-danger' : 'text-success' :'N/A'}  style={{alignSelf:'center'}}>{summary?summary.price.regularMarketChange.fmt: 'N/A'} ({summary?summary.price.regularMarketChangePercent.fmt: 'N/A'})</h5>
                </span>
                <p style={{marginTop:'-10px',fontSize:'13px',color:'#B8AFAD'}}>{summary?new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(summary.price.regularMarketTime): 'N/A'}</p>
            </div>
            */}

            {summary ? <Dashboard  summary={summary} /> : 'Loading...'}

            

            
               <TabsComponent charts={charts} conversations={conversations} statistics={statistics} historics={historics} profile={profile} finances={finances} summary={summary} holders={holders} analysis={analysis} />
            
           
           
           
        </div>
    )
}

export default SingleStock