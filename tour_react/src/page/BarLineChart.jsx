import React, { useState, useEffect } from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarController,
  LineController,       // ✅ 필요함
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarController,
  LineController,       // ✅ 이거 반드시 필요
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);



const BarLineChar = ({ year, month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (year && month) {
      fetch(`/api/people/stats?year=${year}&month=${month}`)
        .then(res => {
          if (!res.ok) throw new Error('데이터를 불러오는 중 오류 발생');
          return res.json();
        })
        .then(setData)
        .catch(err => {
          console.error(err);
          setData([]);  // 에러시 빈 데이터 처리
        });
    }
  }, [year, month]);

  // 데이터가 비어있으면 빈 배열 처리
  const labels = data.length > 0 ? data.map(d => d.city) : [];
  const tourCounts = data.length > 0 ? data.map(d => d.tourCount) : [];
  const totalVisitors = data.length > 0 ? data.map(d => d.totalVisitors) : [];

  const chartData = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: '관광지 수',
        data: tourCounts,
        backgroundColor: 'rgba(0, 123, 255, 0.7)',
        yAxisID: 'y1',
      },
      {
        type: 'line',
        label: '방문객 수',
        data: totalVisitors,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        yAxisID: 'y2',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false
      },
      legend: {
        position: 'top'
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      y1: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: '관광지 수'
        },
        beginAtZero: true,
      },
      y2: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: '방문객 수'
        },
        beginAtZero: true,
        grid: {
          drawOnChartArea: false, // 두 축 겹치지 않게
        }
      }
    }
  };

  return (
    <div>
      <h3>{year}년 {month}월 구별 관광지 & 방문객 통계</h3>
      <Chart type="bar" data={chartData} options={options} />
    </div>
  );
};

export default BarLineChar;
