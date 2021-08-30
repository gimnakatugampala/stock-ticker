import React,{useEffect, useState} from 'react'
import './App.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Navbar from './components/Navbar/Navbar'
import StockRecommend from './components/StockRecommend/StockRecommend'
import TrendingTicker from './components/TrendingTicker/TrendingTicker'
import News from './components/News/News'
import Cryptocurrencies from './components/Cryptocurrencies/Cryptocurrencies'
import Stocks from './components/Stocks/Stocks'
import SingleStock from './components/SingleStock/SingleStock'



import {getlatestNews ,getQueryNews,TrendingTickerAPI ,MoversAPI ,autocompleteAPI,SummaryStockAPi,HoldersStockAPI} from './api'

const App = () => {

    
    const [news, setNews] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [stocks, setstocks] = useState([])
    const [cryptos, setcryptos] = useState([])
    const [movers, setmovers] = useState([])
    const [symbol, setsymbol] = useState('')
    
    if(search){
        autocompleteAPI(search)
        .then(data => setsymbol(data.quotes[0].symbol))
    }


    console.log(symbol)


    const searchTerm = (e) =>{
        e.preventDefault()
        setSearch(search)
    }

    return (
        <div>
            <Navbar setSearch={setSearch} search={search} searchTerm={searchTerm} />

            {/* Recommended List of Stock */}
            {/* <StockRecommend MoversAPI={MoversAPI} isLoading={isLoading} movers={movers} setmovers={setmovers}  /> */}

            <div style={{margin:20}}>

            {/* If searching something get the Single stock component */}
            {
                search !== '' ? <SingleStock SummaryStockAPi={SummaryStockAPi} HoldersStockAPI={HoldersStockAPI} symbol={symbol}  /> : (
                    <div className="row">

                    {/* Tab  */}
                    <div className="col-md-12">
                    <Tabs defaultActiveKey="trending" >
                        <Tab eventKey="trending" title="Trending Stocks">
                        {/* <TrendingTicker TrendingTickerAPI={TrendingTickerAPI} isLoading={isLoading} /> */}
                        </Tab>
                        <Tab eventKey="stocks" title="Stocks">
                            {/* <Stocks TrendingTickerAPI={TrendingTickerAPI} stocks={stocks} setstocks={setstocks} isLoading={isLoading} /> */}
                        </Tab>
                        <Tab eventKey="cryptocurries" title="Cryptocurrencies">
                            {/* <Cryptocurrencies TrendingTickerAPI={TrendingTickerAPI} cryptos={cryptos} setcryptos={setcryptos} isLoading={isLoading} /> */}
                        </Tab>
                    </Tabs>
                    </div>
                </div>
                )
            }

           

            {/* News */}
            <News searchTerm={searchTerm} getQueryNews={getQueryNews} getlatestNews={getlatestNews} news={news} setNews={setNews} isLoading={isLoading} setisLoading={setisLoading} search={search} />

            </div>
        </div>
    )
}

export default App
