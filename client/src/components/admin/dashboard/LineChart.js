import React from "react";
import ReactApexChart from "react-apexcharts";

var data = {
  series: [
    {
      name: "Sales",
      data: [],
      // 4, 10, 9, 29, 19, 22, 9, 12, 16
    },
    {
      name: "Income",
      data: [],
      // 4, 6, 19, 19, 19, 12, 19, 12, 7
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    markers: {
      size: 5,
    },
    // forecastDataPoints: {
    //   count: 7,
    // },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      // type: "datetime",
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      // tickAmount: 10,
    },
    // title: {
    // text: "Forecast",
    // align: "left",
    // style: {
    //   fontSize: "16px",
    //   color: "#666",
    // },
    // },
    colors: ["#00c853", "#e53935"],
    fill: {
      colors: ["#00c853", "#e53935"],
      // type: "gradient",
      // gradient: {
      //   shade: "dark",
      //   gradientToColors: ["#FDD835"],
      //   shadeIntensity: 1,
      //   type: "horizontal",
      //   opacityFrom: 1,
      //   opacityTo: 1,
      //   stops: [0, 100, 100, 100],
      // },
    },
    // yaxis: {
    //   min: -10,
    //   max: 40,
    // },
  },
};

function Part() {
  return (
    <div>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="line"
        height={350}
      />
    </div>
  );
}

export default Part;
