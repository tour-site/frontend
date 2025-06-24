import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import './PlaceList.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const InfraPieChart = ({ city }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/infra/count?city=${encodeURIComponent(city)}`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('인프라 데이터 불러오기 실패:', err));
  }, [city]);

  // 데이터 정렬 (개수 내림차순)
  const sortedData = [...data].sort((a, b) => b.count - a.count);

  // 예외 처리
  if (!data || data.length === 0) {
    return <p style={{ padding: '1rem' }}>🔄 인프라 데이터를 불러오는 중...</p>;
  }

  const labels = sortedData.map(d => d.type);
  const counts = sortedData.map(d => d.count);
  const colors = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'];

  const chartData = {
    labels,
    datasets: [{
      data: counts,
      backgroundColor: colors.slice(0, counts.length),
      hoverOffset: 12
    }]
  };

  return (
    <div className='chartbox'>
      <div className='charttitle'>
        <h3>{city}의 인프라 비율</h3>
        <Pie data={chartData} />
      </div>
      <div className='infrachart'>
        <h3>인프라 개수 순</h3>
        <table className='chartframe'>
          <thead>
            <tr>
              <th>번호</th>
              <th>업종명</th>
              <th>개수</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.type}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfraPieChart;
