import React, { useState } from 'react';

import { Card, Timeline, Button } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';

const pageData: IPageData = {
  title: 'Timelines',
  loaded: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'dashboard'
    },
    {
      title: 'UI Kit ',
      route: 'dashboard'
    },
    {
      title: 'Timelines'
    }
  ]
};

const TimelinePage = () => {
  usePageData(pageData);

  const [reverse, setReverse] = useState(false);

  return (
    <>
      <Card>
        <Timeline>
          <Timeline.Item>
            <div className='d-flex flex-column'>
              <span className='text-lg'>Appointment</span>
              <span className='text-base text-color-100'>2m ago</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.
              </span>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div className='d-flex flex-column'>
              <span className='text-lg'>Medication</span>
              <span className='text-base text-color-100'>2h ago</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.
              </span>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div className='d-flex flex-column'>
              <span className='text-lg'>New patient</span>
              <span className='text-base text-color-100'>Jul 10</span>
              <span className='text-base'>
                Lorem ipsum dolor sit.
              </span>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div className='d-flex flex-column'>
              <span className='text-lg'>Examination</span>
              <span className='text-base text-color-100'>Jul 1</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.
              </span>
            </div>
          </Timeline.Item>

        </Timeline>
      </Card>
    </>
  );
};

export default TimelinePage;
