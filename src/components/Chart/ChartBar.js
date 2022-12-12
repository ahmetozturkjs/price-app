import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillHeight="0%";
    if(props.maxValue>0){
        barFillHeight=Math.round((props.value/props.maxValue)*100)+"%"
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div style={{height:barFillHeight}} className="chart-bar___fill"></div>
      </div>
      <div className="chart-bar___label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
