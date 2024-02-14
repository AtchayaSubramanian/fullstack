import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  // Sample data for the pie chart
  const series = [44, 55, 13, 43, 22];

  const options = {
    chart: {
      type: 'pie',
      background: '#f5f5f5',
      borderRadius: 10,
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'
    },
    labels: ['Wedding', 'Birthday', 'CorporateEvent', 'Party', 'SocialEvent'],
    colors: ['#7868e6', '#ffa600', '#ff7c43', '#d45087', '#6055a5']
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color:'lightviolet' ,marginTop:'50px',marginBottom:'50px',paddingLeft:'120px'}}>Pie Chart Example</h1>
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
}

export default PieChart;
