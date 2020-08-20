import React from 'react';

import { Form, Formik } from 'formik';
import { Input, Select } from 'antd';

import { IUser } from '../../../interfaces/user';

import ImageLoader from '../../../layout/components/Patients/ImageLoader';

const { TextArea } = Input;

type Props = {
  onSubmit: (doctor: IUser) => void;
  onCancel: () => void;
};

const initialValues = {
  social: [
    {
      icon: '',
      link: '',
    },
    {
      icon: '',
      link: '',
    },
    {
      icon: '',
      link: '',
    },
  ],
  profileLink: '',
  role: '',
  name: '',
  lastName: '',
  img: '',
  gender: '',
  address: '',
};

const DoctorForm = ({ onSubmit, onCancel }: Props) => {
  const handleGenderSelect = () => {};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={({ values, handleChange }) => (
        <Form>
          <div className='form-group'>
            <ImageLoader src={`${window.location.origin}/${values.img}`} />
          </div>

          <div className='form-group'>
            <Input
              name='name'
              type='text'
              placeholder='First name'
              onChange={handleChange}
              defaultValue={values.name}
            />
          </div>

          <div className='form-group'>
            <Input
              type='text'
              name='lastName'
              placeholder='Last name'
              onChange={handleChange}
              defaultValue={values.lastName}
            />
          </div>

          <div className='row'>
            <div className='col-sm-6 col-12'>
              <div className='form-group'>
                <Input
                  placeholder='Speciality'
                  name='role'
                  type='text'
                  defaultValue={values.role}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='col-sm-6 col-12'>
              <div className='form-group'>
                <Select defaultValue={values.gender} onChange={handleGenderSelect}>
                  <Select.Option value='Male'>Male</Select.Option>
                  <Select.Option value='Female'>Female</Select.Option>
                </Select>
              </div>
            </div>
          </div>

          <div className='form-group'>
            <Input
              name='address'
              placeholder='Address'
              onChange={handleChange}
              defaultValue={values.address}
            />
          </div>
        </Form>
      )}
    />
  );
};

export default DoctorForm;
