import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function StockChart() {
  const [data] = useState({
    series: [
      {
        name: 'market price',
        data: [0, 8, 50, 100, 112, 110, 118, 123, 150,160],
      },
      {
        name: 'our prediction',
        data:  [0, 12, 20, 70, 75, 85, 110, 123, 150,152,180],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['#d5dcf4', '#7180BF'],
      },
      grid: {
        show: false,
      },
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      xaxis: {
        type: 'string',
        categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', ''],
      },
      yaxis: {
        show: false,
      },
      fill: {
        colors: ['#AFBDEA', '#ffffff'],
      },
      tooltip: {
        followCursor: false,
        custom: function ({ series, seriesIndex, dataPointIndex }) {
          return `<div class="chart-tooptip">£ ${series[seriesIndex][dataPointIndex]},000</div>`;
        },
      },
      legend: {
        show: false,
      },
    },
  });

  return (
    <div className='w-full relative chart mb-14 md:mb-0'>
      <div className='static md:absolute top-6 left-14 z-50 px-4'>
        <h1 className='font-semibold font-head text-2xl md:text-3xl text-black-900 mb-3 md:mb-6'>
          Portfolio
        </h1>
        <a
          href='#'
          className='text-primary-100 bg-gray-100 px-4 py-2 rounded-xl'>
          Settings
        </a>
      </div>
      <Chart
        options={data.options}
        series={data.series}
        type='area'
        width={'100%'}
        height= '250'
      />
    </div>
  );
}