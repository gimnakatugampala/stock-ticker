import React, { useEffect ,useState} from 'react'
import './styles.css'

import TabsComponent from './TabsComponent/Tabs'



const SingleStock = ({ConversationnStockAPI,StatisticStockAPI,HistoricStockAPI,ProfileStockAPI,FinancialStockAPI,AnalysisStockAPI,HoldersStockAPI,SummaryStockAPi,symbol}) => {

    const [summary, setsummary] = useState(null)
    const [holders, setholders] = useState(null)
    const [analysis, setanalysis] = useState(null)
    const [finances, setfinances] = useState(null)
    const [profile, setprofile] = useState(null)
    const [historics, sethistorics] = useState(null)
    const [statistics, setstatistics] = useState(null)
    const [conversations, setconversations] = useState(null)

    useEffect(() => {

        // Get Summary API
        SummaryStockAPi(symbol)
        .then(data => {
            setsummary(data)
            console.log(data)
        })

           // Statistics data
           StatisticStockAPI(symbol)
           .then(data => {
               setstatistics(data)
               console.log(data)
           })

      

        setTimeout(() => {

             // Get Profile Data
        ProfileStockAPI(symbol)
        .then(data => {
            setprofile(data)
            console.log(data)
        })

           // Conversations Data
           ConversationnStockAPI(symbol)
           .then(data => {
               setconversations(data)
               console.log(data)
           })

           

        },5000)

        setTimeout(() =>{

            HistoricStockAPI(symbol)
            .then(data => {
                sethistorics(data)
                console.log(data)
            })

              // Get Financial Data
              FinancialStockAPI(symbol)
              .then(data => {
                  setfinances(data)
                  console.log(data)
              })
    

        },10000)

        setTimeout(() => {

           

                // Get Analysis Data
                AnalysisStockAPI(symbol)
                .then(data => {
                    setanalysis(data)
                    console.log(data)
                })

                     // Get Holders Data
            HoldersStockAPI(symbol)
            .then(data => {
                setholders(data)
                console.log(data)
            })


        },11000)



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
            
            
               <TabsComponent conversations={conversations} statistics={statistics} historics={historics} profile={profile} finances={finances} summary={summary} holders={holders} analysis={analysis} />
            
           
           
           
        </div>
    )
}

export default SingleStock
