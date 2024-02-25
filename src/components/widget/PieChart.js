import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ data }) => {
  const series = data.map((item) => parseFloat(item['Q1-23'].replace('%', '')));

  const options = {
    chart: {
      id: 'basic-pie',
    },
    labels: data.map((item) => item.Product),
    dataLabels: {
      enabled: false,
    },
  };

  return (
      <Chart options={options} series={series} type="pie" />
  );
};

export default PieChart;
