import React, { useEffect } from 'react'

const StockRecommend = ({MoversAPI,isLoading,movers,setmovers}) => {

    let options = [];

    useEffect(() =>{
        MoversAPI()
        .then(data => setmovers(data.finance.result[0].quotes))

    },[])
    
    Object.keys(movers).forEach(function(key) {
        options.push(movers[key]);
    });
    console.log(options)

    return (
        <div style={{display:'flex'}}>
          <marquee style={{justifyContent:'center'}}>
              {
                  options?.map((option,index) => (

                <span key={index} style={{padding:'5px',marginLeft:'10px',marginRight:'10px',borderRight:'1px solid black',borderLeft:'1px solid black'}}>
                    <span style={{margin:'0 10px 0 10px'}}>
                        <span style={{fontWeight:'bold'}}>{option.longName} ({option.symbol})  </span>
                        <span style={{fontWeight:'bold'}}>$ {option.postMarketPrice.toFixed(2)}     </span>
                        <span className={Math.sign(option.regularMarketChange.toFixed(2)) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>$ {option.regularMarketChange.toFixed(2)}   {option.regularMarketChangePercent.toFixed(2)}%</span>

                    </span>
                </span>

                  ))
              }
           
            </marquee>
        </div>
    )
}

export default StockRecommend
