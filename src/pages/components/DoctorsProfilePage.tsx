import React from 'react';

import { Avatar, Button, Card, Timeline } from 'antd';

import { IPageData } from '../../interfaces/page';
import { usePageData } from '../../hooks/usePage';
import { useGetDoctor } from '../../hooks/useGetDoctor';
import {
  ExperimentOutlined,
  MonitorOutlined,
  UserAddOutlined,
  UserOutlined
} from '@ant-design/icons/lib';

const pageData: IPageData = {
  title: 'Doctor profile page',
  fullFilled: true,
  breadcrumbs: [
    {
      title: 'Medicine',
      route: 'dashboard'
    },
    {
      title: 'Doctors',
      route: 'dashboard'
    },
    {
      title: 'Dr.Sophie'
    }
  ]
};

const DoctorProfilePage = () => {
  const { address, gender, img, lastName, name, role, social } = useGetDoctor('Dr. Sophie');
  usePageData(pageData);

  return (
    <>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <div className='header'>
            <Card title={<h5>Photo</h5>}>
              <div className='d-flex align-items-center'>
                <Avatar src={img as string} size={100} className='mr-5' />

                <Button icon={<UserOutlined />} type='primary'>
                  Change photo
                </Button>
              </div>
            </Card>
          </div>

          <div className='info'></div>

          <div className='social-networks'></div>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card>
            <Timeline mode='right'>
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
        </div>
      </div>

      <div className='patients-graph'></div>
    </>
  );
};

export default DoctorProfilePage;
