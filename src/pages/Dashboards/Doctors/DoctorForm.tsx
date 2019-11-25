import React from 'react';
import { IUser } from '../../../interfaces/user';
import { useFormik, Form, FieldArray, Field, Formik } from 'formik';
import { Input, Select } from 'antd';

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
      link: ''
    },
    {
      icon: '',
      link: ''
    },
    {
      icon: '',
      link: ''
    }
  ],
  profileLink: '',
  role: '',
  name: '',
  lastName: '',
  img: '',
  gender: '',
  address: ''
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
              placeholder='First name'
              name='name'
              type='text'
              defaultValue={values.name}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <Input
              placeholder='Last name'
              name='lastName'
              type='text'
              defaultValue={values.lastName}
              onChange={handleChange}
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
            <TextArea
              rows={3}
              placeholder='Address'
              name='address'
              defaultValue={values.address}
              onChange={handleChange}
            />
          </div>
        </Form>
      )}
    />
  );
};

export default DoctorForm;
