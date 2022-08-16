import React from 'react';
import { Header } from '../../components';
import { Pie } from '../../components/';
function PieChart() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Project Cost Analysis" />
      <Pie />
    </div>
  );
}

export default PieChart;
