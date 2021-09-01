import React, { useEffect, useState } from 'react'
import './styles.css'

import ChartGraph from "react-apexcharts";

const Chart = ({charts}) => {

    const [series, setseries] = useState([{
        data: []
      }])

      const round = (number) => {
        return number ? +(number.toFixed(2)) : null;
      };
      

    

   const chart = {
    options: {
      chart: {
        type: 'candlestick',
        height: 350
      },
      title: {
        text: 'Daily Stock Chart',
        align: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    },
  
  
  }

  useEffect(() => {

    const quote = charts.indicators.quote[0];
    const prices = charts.timestamp.map((timestamp, index) => ({
      x: new Date(timestamp * 1000),
      y: [quote.open[index], quote.high[index], quote.low[index], quote.close[index]].map(round)
    }));
    setseries([{
      data: prices,
    }]);



  },[charts])



    return (
        <div className="container-fluid">
            <ChartGraph
              options={chart.options}
              series={series}
              type="candlestick"
              width="100%"
            />
        </div>
    )
}

export default Chart
