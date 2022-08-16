import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationDataLabel,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
function Pie() {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id="charts"
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject
        services={[
          AccumulationDataLabel,
          PieSeries,
          AccumulationLegend,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          xName="x"
          yName="y"
          innerRadius="40%"
          dataLabel={{ visible: true, name: 'text', position: 'Inside' }}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}

export default Pie;
