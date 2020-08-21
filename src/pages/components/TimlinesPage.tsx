import React from 'react';

import { Card, Timeline } from 'antd';
import {
  ExperimentOutlined,
  MonitorOutlined,
  UserAddOutlined,
  UserOutlined
} from '@ant-design/icons/lib';

import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';

const pageData: IPageData = {
  title: 'Timelines',
  fulFilled: true,
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
      title: 'Timelines'
    }
  ]
};

const TimelinePage = () => {
  usePageData(pageData);

  return (
    <>
      <Card title={'With icons'}>
        <Timeline className='ml-2'>
          <Timeline.Item
            dot={
              <div className='p-2 bg-color-indigo rounded-full'>
                <UserOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column'>
              <span className='text-lg'>Appointment</span>
              <span className='text-base text-color-100'>2m ago</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.
              </span>
            </div>
          </Timeline.Item>

          <Timeline.Item
            dot={
              <div className='p-2 bg-color-pink rounded-full'>
                <ExperimentOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column'>
              <span className='text-lg'>Medication</span>
              <span className='text-base text-color-100'>2h ago</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
                veniam.
              </span>
            </div>
          </Timeline.Item>

          <Timeline.Item
            dot={
              <div className='p-2 bg-color-yellow rounded-full'>
                <UserAddOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column'>
              <span className='text-lg'>New patient</span>
              <span className='text-base text-color-100'>Jul 10</span>
              <span className='text-base'>Lorem ipsum dolor sit.</span>
            </div>
          </Timeline.Item>

          <Timeline.Item
            dot={
              <div className='p-2 bg-color-orange rounded-full'>
                <MonitorOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column'>
              <span className='text-lg'>Examination</span>
              <span className='text-base text-color-100'>Jul 1</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
                veniam.
              </span>
            </div>
          </Timeline.Item>
        </Timeline>
      </Card>

      <Card title={'With dots'}>
        <Timeline className='ml-2'>
          <Timeline.Item color='blue'>
            <div className='d-flex flex-column'>
              <span className='text-lg'>Appointment</span>
              <span className='text-base text-color-100'>2m ago</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.
              </span>
            </div>
          </Timeline.Item>

          <Timeline.Item color='pink'>
            <div className='d-flex flex-column'>
              <span className='text-lg'>Medication</span>
              <span className='text-base text-color-100'>2h ago</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
                veniam.
              </span>
            </div>
          </Timeline.Item>

          <Timeline.Item color='yellow'>
            <div className='d-flex flex-column'>
              <span className='text-lg'>New patient</span>
              <span className='text-base text-color-100'>Jul 10</span>
              <span className='text-base'>Lorem ipsum dolor sit.</span>
            </div>
          </Timeline.Item>

          <Timeline.Item color='orange'>
            <div className='d-flex flex-column'>
              <span className='text-lg'>Examination</span>
              <span className='text-base text-color-100'>Jul 1</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
                veniam.
              </span>
            </div>
          </Timeline.Item>
        </Timeline>
      </Card>

      <Card title={'Rigth align'}>
        <Timeline className='ml-2' mode='right'>
          <Timeline.Item color='blue'>
            <div className='d-flex flex-column'>
              <span className='text-lg'>Appointment</span>
              <span className='text-base text-color-100'>2m ago</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.
              </span>
            </div>
          </Timeline.Item>

          <Timeline.Item color='pink'>
            <div className='d-flex flex-column'>
              <span className='text-lg'>Medication</span>
              <span className='text-base text-color-100'>2h ago</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
                veniam.
              </span>
            </div>
          </Timeline.Item>

          <Timeline.Item color='yellow'>
            <div className='d-flex flex-column'>
              <span className='text-lg'>New patient</span>
              <span className='text-base text-color-100'>Jul 10</span>
              <span className='text-base'>Lorem ipsum dolor sit.</span>
            </div>
          </Timeline.Item>

          <Timeline.Item color='orange'>
            <div className='d-flex flex-column'>
              <span className='text-lg'>Examination</span>
              <span className='text-base text-color-100'>Jul 1</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
                veniam.
              </span>
            </div>
          </Timeline.Item>
        </Timeline>
      </Card>

      <Card className='mb-0' title={'Centered'}>
        <Timeline className='ml-2' mode='alternate'>
          <Timeline.Item
            className='p-2'
            dot={
              <div className='p-2 bg-color-indigo rounded-full'>
                <UserOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column mx-2'>
              <span className='text-lg'>Appointment</span>
              <span className='text-base text-color-100'>2m ago</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.
              </span>
            </div>
          </Timeline.Item>

          <Timeline.Item
            dot={
              <div className='p-2 bg-color-pink rounded-full'>
                <ExperimentOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column mx-2'>
              <span className='text-lg'>Medication</span>
              <span className='text-base text-color-100'>2h ago</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
                veniam.
              </span>
            </div>
          </Timeline.Item>

          <Timeline.Item
            dot={
              <div className='p-2 bg-color-yellow rounded-full'>
                <UserAddOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column mx-2'>
              <span className='text-lg'>New patient</span>
              <span className='text-base text-color-100'>Jul 10</span>
              <span className='text-base'>Lorem ipsum dolor sit.</span>
            </div>
          </Timeline.Item>

          <Timeline.Item
            dot={
              <div className='p-2 bg-color-orange rounded-full'>
                <MonitorOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column mx-2'>
              <span className='text-lg'>Examination</span>
              <span className='text-base text-color-100'>Jul 1</span>
              <span className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
                veniam.
              </span>
            </div>
          </Timeline.Item>
        </Timeline>
      </Card>
    </>
  );
};

export default TimelinePage;
