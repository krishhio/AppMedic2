import React from 'react';

import { Alert, Card } from 'antd';
import { BarChartOutlined } from '@ant-design/icons/lib';

import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

import lineChart from './options/linearChart';
import barChart from './options/barChart';
import doughnutChart from './options/doughnutChart';
import radarChart from './options/radarChart';
import polarAreaChart from './options/polarAreaChart';
import pieChart from './options/pieChart';

import { usePageData } from '../../../hooks/usePage';
import { IPageData } from '../../../interfaces/page';

const pageData: IPageData = {
  title: 'Chart js',
  loaded: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'default-dashboard'
    },
    {
      title: 'UI Kit ',
      route: 'default-dashboard'
    },
    {
      title: 'Chart Js'
    }
  ]
};

const ChartJsPage = () => {
  usePageData(pageData);

  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <Card title='Linear'>
            <Line {...lineChart} />
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title='Bar'>
            <Bar {...barChart} />
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title='Doughnut'>
            <Doughnut {...doughnutChart} />
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title='Radar'>
            <Radar {...radarChart} />
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title='Pie'>
            <Pie {...pieChart} />
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title='Polar area chart'>
            <Polar {...polarAreaChart} />
          </Card>
        </div>
      </div>

      <Alert
        style={{ background: 'hsla(0,0%,92.2%,.3)' }}
        message={
          <span>
            <BarChartOutlined className='mr-2' style={{ fontSize: '1.8em' }} />
            More information can be found in{' '}
            <a href='https://github.com/jerairrest/react-chartjs-2'>official page</a>
          </span>
        }
      />
    </>
  );
};

export default ChartJsPage;
