import { useState } from "react"
import { convertData } from "../../helpers/convertData"
import styles from "./chart.module.css"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function Chart({chart,setChart}) {
    const [type,setType] = useState("prices");
    
  return (
    <div className={styles.container}>
      <span onClick={() => setChart(null)} className={styles.cross}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart,type)} type={type}/>
        </div>
      </div>
    </div>
  )
}

export default Chart

const ChartComponent = ({data,type}) => {
  return(
    <ResponsiveContainer width="100%" height="100%">
              <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth={2}/>
                <CartesianGrid stroke="#404042"/>
                <YAxis dataKey={type} domain={["auto","auto"]}/>
                <XAxis dataKey="data" />
                <Legend/>
                <Tooltip/>
              </LineChart>
          </ResponsiveContainer>
  )
}

export {ChartComponent}