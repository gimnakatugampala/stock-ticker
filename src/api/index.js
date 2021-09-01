
 // Latest News
 export const getlatestNews = async() =>{
    let res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=308faf4efa404c539cac219d9e6e0ac8');
    return res.json(); 
  }

//   Query News
export const getQueryNews = async(search) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${search}e&sortBy=popularity&apiKey=308faf4efa404c539cac219d9e6e0ac8`);
    return res.json(); 
}

// Trending API
export const TrendingTickerAPI = async() =>{
    let res = await  fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US", {
        "method": "GET",
        "headers": {
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
            // 'x-rapidapi-key': '9bec526ac3msh63dd0dbf60fc193p178bb9jsn3d32f5cc75cf'
        }
    })
    return res.json()
}

// Get Movers | Dashboard Margue
export const MoversAPI = async() =>{
    let res = await  fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-watchlist-detail?userId=X3NJ2A7VDSABUI4URBWME2PZNM&pfId=the_berkshire_hathaway_portfolio", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4c6aeeefcmshafcb79a18c182d6p117e9cjsn85fc01a7a14b"
        }
    })
    return res.json()
}

// Get the Symbol autocomplete
export const autocompleteAPI = async(search) =>{
    let res = await  fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=${search}&region=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4c6aeeefcmshafcb79a18c182d6p117e9cjsn85fc01a7a14b"
        }
    })
    return res.json()
}

// Get The Summary Stock
export const SummaryStockAPi = async(facebook) =>{
    let res = await  fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${facebook}&region=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4c6aeeefcmshafcb79a18c182d6p117e9cjsn85fc01a7a14b"
        }
    })
    return res.json()
}

// Get the Holders of the Stock
export const HoldersStockAPI = async(name) =>{
    let res = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-holders?symbol=${name}&region=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4c6aeeefcmshafcb79a18c182d6p117e9cjsn85fc01a7a14b"
        }
    })
    return res.json()
}

// Get the Analysis of the Stock
export const AnalysisStockAPI = async(analysis) =>{
    let res = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=${analysis}&region=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4c6aeeefcmshafcb79a18c182d6p117e9cjsn85fc01a7a14b"
        }
    })
    return res.json()
}


// Get the Financies of the Stock
export const FinancialStockAPI = async(finance) =>{
    let res = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=${finance}&region=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4c6aeeefcmshafcb79a18c182d6p117e9cjsn85fc01a7a14b"
        }
    })
    return res.json()
}

// Get the Profile of the Stock
export const ProfileStockAPI = async(profile) =>{
    let res = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=${profile}&region=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4c6aeeefcmshafcb79a18c182d6p117e9cjsn85fc01a7a14b"
        }
    })
    return res.json()
}


// Get the Historic Data of the Stock
export const HistoricStockAPI = async(history) =>{
    let res = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=${history}&region=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4c6aeeefcmshafcb79a18c182d6p117e9cjsn85fc01a7a14b"
        }
    })
    return res.json()
}


// Get the Statistics of the Stock
export const StatisticStockAPI = async(statistic) =>{
    let res = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-statistics?symbol=${statistic}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4c6aeeefcmshafcb79a18c182d6p117e9cjsn85fc01a7a14b"
        }
    })
    return res.json()
}

// Get the Conversations of the Stock
export const ConversationnStockAPI = async(convers) =>{
    let res = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/conversations/list?symbol=${convers}&messageBoardId=finmb_24937&region=US&userActivity=true&sortBy=createdAt&off=0`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4c6aeeefcmshafcb79a18c182d6p117e9cjsn85fc01a7a14b"
        }
    })
    return res.json()
}








