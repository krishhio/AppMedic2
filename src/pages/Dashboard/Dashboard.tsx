import React, { useEffect, useState } from 'react';

import { Card } from 'antd';

import ReactEcharts from 'echarts-for-react';

import AppointmentsTable from '../../layout/components/AppointmentsTable/AppointmentsTable';

import hospitalOptions from './Charts/HospitalOptions';
import { incomeInWeek, incomeInMonth } from './Charts/IncomeOptions';
import { patientsGenderOptions, departmentsOptions, patientsAgeOptions } from './Charts/PatientsOptions';

import { PageProps } from '../../interfaces/page';
import { IPageData } from '../../interfaces/page-data';
import { IAppointment } from '../../interfaces/patient';

const pageData: IPageData = {
  loaded: true,
  fullFilled: false,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'dashboard'
    },
    {
      title: 'Patients'
    }
  ]
};

const DashboardPage = ({ setPageData, getData }: PageProps) => {
  const [appointments, setAppointment] = useState<IAppointment[]>([]);

  useEffect(() => {
    getData('./data/last-appointments.json', setAppointment)
  }, []);

  useEffect(() => setPageData(pageData), []);

  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated custom-bg-color'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-first-aid-alt'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Appointments</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb' }}>
                  213
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated custom-bg-color'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-wheelchair'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>New patients</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb' }}>
                  213
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated custom-bg-color'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-blood'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Operation</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb' }}>
                  23
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated custom-bg-color'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-dollar-true'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Hospital Earning</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb' }}>
                  $5238
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card title='Hospital survey'>
        <ReactEcharts className='chart-container container-h-400' option={hospitalOptions} />
      </Card>

      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <Card>
            <h4 className='mt-0 mb-1'>$25038</h4>
            <p className='mb-0' style={{ color: '#9d9d9d' }}>
              Income in current month
            </p>

            <ReactEcharts className='chart-container' option={incomeInMonth} />
          </Card>
        </div>

        <div className='col-sm-12 col-md-6'>
          <Card>
            <h4 className='mt-0 mb-1'>$2195</h4>
            <p className='mb-0' style={{ color: '#9d9d9d' }}>
              Income in current week
            </p>

            <ReactEcharts className='chart-container' option={incomeInWeek} />
          </Card>
        </div>
      </div>

      <div className='row'>
        <div className='col-12 col-md-4'>
          <Card title={'Patients age'}>
            <ReactEcharts className='chart-container container-h-300' option={patientsAgeOptions} />
          </Card>
        </div>

        <div className='col-12 col-md-4'>
          <Card title={'Patients gender'}>
            <ReactEcharts className='chart-container container-h-300' option={patientsGenderOptions} />
          </Card>
        </div>

        <div className='col-12 col-md-4'>
          <Card title={'Departments'}>
            <ReactEcharts className='chart-container container-h-300' option={departmentsOptions} />
          </Card>
        </div>
      </div>

      <Card title='Last appointments' className='mb-0'>
        <AppointmentsTable data={appointments} />
      </Card>
    </>
  );
};

export default DashboardPage;
