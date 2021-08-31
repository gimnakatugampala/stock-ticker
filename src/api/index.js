
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
            "x-rapidapi-key": "3eb96b68f3msheae2452c64a87c9p148086jsn05d3e86df6e3"
        }
    })
    return res.json()
}

// Get the Symbol autocomplete
export const autocompleteAPI = async(search) =>{
    let res = await  fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=${search}&region=US`, {
        "method": "GET",
        "headers": {
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
            'x-rapidapi-key': '3eb96b68f3msheae2452c64a87c9p148086jsn05d3e86df6e3'
        }
    })
    return res.json()
}

// Get The Summary Stock
export const SummaryStockAPi = async(facebook) =>{
    let res = await  fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${facebook}&region=US`, {
        "method": "GET",
        "headers": {
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
            'x-rapidapi-key': '3eb96b68f3msheae2452c64a87c9p148086jsn05d3e86df6e3'
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
            "x-rapidapi-key": "3eb96b68f3msheae2452c64a87c9p148086jsn05d3e86df6e3"
        }
    })
    return res.json()
}

// Get the Analysis of the Stock
export const AnalysisStockAPI = async() =>{
    let res = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=AAPL&region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "3eb96b68f3msheae2452c64a87c9p148086jsn05d3e86df6e3"
        }
    })
    return res.json()
}






