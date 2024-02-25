import Chart from "react-apexcharts";

const BarGraph = ({ data, headingColor }) => {
  const series = [
    {
      name: "Q1-23",
      data: data.map((item) => parseFloat(item["Q1-23"].replace("%", ""))),
    },
    {
      name: "Q2-23",
      data: data.map((item) => parseFloat(item["Q2-23"].replace("%", ""))),
    },
    {
      name: "Q3-23",
      data: data.map((item) => parseFloat(item["Q3-23"].replace("%", ""))),
    },
    {
      name: "Q4-23",
      data: data.map((item) => parseFloat(item["Q4-23"].replace("%", ""))),
    },
  ];

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: data.map((item) => item.Product),
      labels: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    
  };

  return (
      <Chart options={options} series={series} type="bar" />
  );
};

export default BarGraph;
