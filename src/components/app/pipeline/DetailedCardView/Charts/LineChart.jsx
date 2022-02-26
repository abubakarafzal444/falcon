import React from 'react';
import { getColor, rgbaColor } from 'helpers/utils';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import BasicECharts from 'components/common/BasicEChart';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer
]);

const getOptions = (arr1, arr2) => ({
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30']
  },
  yAxis: {
    type: 'value'
  },

  series: [
    {
      name: 'data1',
      type: 'line',
      data: arr1,
      smooth: true,
      lineStyle: {
        width: 3
      },

      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getColor('primary'), 0.25)
            },
            {
              offset: 1,
              color: rgbaColor(getColor('primary'), 0)
            }
          ]
        }
      }
    },
    {
      type: 'line',
      name: 'data2',
      data: arr2,
      smooth: true,
      lineStyle: {
        width: 3
      },

      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getColor('primary'), 0.25)
            },
            {
              offset: 1,
              color: rgbaColor(getColor('primary'), 0)
            }
          ]
        }
      }
    }
  ],
  grid: {
    bottom: '0',
    top: '0',
    right: '0',
    left: ''
  }
});

const LineChartComponent = ({ data }) => {
  return (
    <>
      <BasicECharts
        echarts={echarts}
        options={getOptions(
          [10, 20, 30, 0, 15, 52, 11, 55, 22, 5, 0, 44, 5],
          [100, 90, 50, 60, 70, 10, 0, 50, 55, 22, 66, 99]
        )}
        style={{
          width: 400,
          height: 300,
          borderLeft: '5px solid grey',
          borderBottom: '5px solid grey'
        }}
      />
    </>
  );
};

export default LineChartComponent;
