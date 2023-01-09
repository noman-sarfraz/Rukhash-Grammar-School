import React from "react";
import ReactApexChart from "react-apexcharts";

var pieChartData = {
  series: [50 , 50],
  options: {
    chart: {
      // width: 380,
      type: "pie",
    },
    // legend: {
    //   labels: {
    //     height: 100, // -> this one.
    //   },
    // },
    colors: ["#00c853", "#e53935"],
    fill: {
      type: "gradient",
      // colors: ["#00c853", "#e53935"],
    },
    labels: ["Income", "Expense"],
    legend: {
      position: "bottom",
      verticalAlign: "bottom",
    },
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     options: {
    //       chart: {
    //         width: 200,
    //       },
    //       legend: {
    //         position: "bottom",
    //       },
    //     },
    //   },
    // ],
  },
};

function Pie() {
  return (
    <div>
      <ReactApexChart
        options={pieChartData.options}
        series={pieChartData.series}
        type="donut"
        width={380}
      />
    </div>
  );
}

export default Pie;
