import React from 'react';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import BasicECharts from 'components/common/BasicEChart';
import { getColor } from 'helpers/utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer
]);

const getOptions = data => ({
  tooltip: {
    show: true
  },
  series: [
    {
      type: 'bar',
      data,
      symbol: 'none',
      itemStyle: {
        color: getColor('primary'),
        borderRadius: [5, 5, 0, 0]
      }
    }
  ]
  //  { right: '16px', left: '0', bottom: '0', top: '0' }
});

const TowerChart = data => {
  return (
    <BasicECharts
      echarts={echarts}
      options={getOptions([
        172, 129, 123, 158, 196, 106, 187, 198, 152, 175, 178, 165, 188, 139,
        115, 131, 143, 140, 112, 167, 180, 156, 121, 190, 100
      ])}
      style={{
        width: 400,
        height: 300,
        borderLeft: '5px solid grey',
        borderBottom: '5px solid grey'
      }}
    />
  );
};

export default TowerChart;
