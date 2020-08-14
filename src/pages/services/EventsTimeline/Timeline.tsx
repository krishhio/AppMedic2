import React from 'react';
import { Tag, Timeline } from 'antd';
import {
  AlertOutlined,
  ExperimentOutlined,
  MedicineBoxOutlined,
  MonitorOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UserOutlined
} from '@ant-design/icons/lib';

export const OurTimeline = () => {
  return (
    <>
      <Tag className='timeline-tag mb-5' color='#f56565' style={{ color: '#fff' }}>
        Events
      </Tag>
      <Timeline className='ml-4'>
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
            <div className='p-2 bg-color-green rounded-full'>
              <AlertOutlined className='text-contrast-500' />
            </div>
          }
        >
          <div className='d-flex flex-column'>
            <span className='text-lg'>Appointment</span>
            <span className='text-base text-color-100'>Yesterday</span>
            <span className='text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.
            </span>
          </div>
        </Timeline.Item>

        <Timeline.Item
          dot={
            <div className='p-2 bg-color-blue rounded-full'>
              <MedicineBoxOutlined className='text-contrast-500' />
            </div>
          }
        >
          <div className='d-flex flex-column'>
            <span className='text-lg'>Medication</span>
            <span className='text-base text-color-100'>Week ago</span>
            <span className='text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
              veniam.
            </span>
          </div>
        </Timeline.Item>
      </Timeline>

      <Tag className='timeline-tag mb-5' color='#48bb78' style={{ color: '#fff' }}>
        Meetings
      </Tag>
      <Timeline className='ml-4'>
        <Timeline.Item
          dot={
            <div className='p-2 bg-color-yellow rounded-full'>
              <UserAddOutlined className='text-contrast-500' />
            </div>
          }
        >
          <div className='d-flex flex-column'>
            <span className='text-lg'>New patient</span>
            <span className='text-base text-color-100'>Aug 3</span>
            <span className='text-base'>Lorem ipsum dolor sit.</span>
          </div>
        </Timeline.Item>

        <Timeline.Item
          dot={
            <div className='p-2 bg-color-teal rounded-full'>
              <MonitorOutlined className='text-contrast-500' />
            </div>
          }
        >
          <div className='d-flex flex-column'>
            <span className='text-lg'>Examination</span>
            <span className='text-base text-color-100'>Jul 10</span>
            <span className='text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
              veniam.
            </span>
          </div>
        </Timeline.Item>

        <Timeline.Item
          dot={
            <div className='p-2 bg-color-orange rounded-full'>
              <UsergroupAddOutlined className='text-contrast-500' />
            </div>
          }
        >
          <div className='d-flex flex-column'>
            <span className='text-lg'>New patient</span>
            <span className='text-base text-color-100'>Jul 1</span>
            <span className='text-base'>Lorem ipsum dolor sit.</span>
          </div>
        </Timeline.Item>
      </Timeline>
    </>
  );
};
