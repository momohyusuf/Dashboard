import React from 'react';
import { Header, Pyramid } from '../../components';

function PyramidChart() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Pyramid Chart" />
      <Pyramid />
    </div>
  );
}

export default PyramidChart;
