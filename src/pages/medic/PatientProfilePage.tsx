import React from 'react';
import { Card, Form, Input, Select } from 'antd';

import { useFormik } from 'formik';

import { IPageData } from '../../interfaces/page';

import { usePageData } from '../../hooks/usePage';
import { useGetPatient } from '../../hooks/useGetPatient';

import ImageLoader from '../../layout/components/Patients/ImageLoader';

const pageData: IPageData = {
  title: 'Patient profile page',
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
      title: 'Liam Jouns'
    }
  ]
};

const FormItem = Form.Item;
const Option = Select.Option;

const ProfileForm = ({ patient }) => {
  const { values, handleSubmit } = useFormik({
    initialValues: { ...patient },
    onSubmit: (val) => console.log(val)
  });

  return (
    <Form layout='vertical'>
      <FormItem label='Full name'>
        <Input defaultValue={values.name} placeholder='Full name' />
      </FormItem>

      <FormItem label='id'>
        <Input defaultValue={values.id} placeholder='id' />
      </FormItem>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <FormItem label='Age'>
            <Input defaultValue={values.age} placeholder='Age' />
          </FormItem>
        </div>
        <div className='col-md-6 col-sm-12'>
          <FormItem label='Gender'>
            <Select defaultValue={values.gender} placeholder='Gender'>
              <Option value='male'>Male</Option>
              <Option value='female'>Female</Option>
            </Select>
          </FormItem>
        </div>
      </div>

      <FormItem label='Phone'>
        <Input defaultValue={values.phone} placeholder='Phone' />
      </FormItem>

      <FormItem label='Address'>
        <Input.TextArea rows={4} defaultValue={values.address} placeholder='Address' />
      </FormItem>

      <FormItem label='Last visit'>
        <Input defaultValue={values.lastVisit} placeholder='Last visit' readOnly />
      </FormItem>

      <FormItem label='Status'>
        <Select defaultValue={values.status} placeholder='Status'>
          <Option value='Approved'>Approved</Option>
          <Option value='Pending'>Pending</Option>
        </Select>
      </FormItem>
    </Form>
  );
};

const PatientProfilePage = () => {
  const { patient } = useGetPatient('Liam Jouns');
  usePageData(pageData);

  return (
    patient && (
      <>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <div className='header'>
              <Card title={<h6 className='my-0'>Photo</h6>}>
                <ImageLoader src={patient.img as string} size={100} />
              </Card>
            </div>

            <div className='info'>{<ProfileForm patient={patient} />}</div>
          </div>

          <div className='col-md-6 col-sm-12'>
            <Card></Card>
          </div>
        </div>

        <div className='patients-table'></div>
      </>
    )
  );
};

export default PatientProfilePage;
