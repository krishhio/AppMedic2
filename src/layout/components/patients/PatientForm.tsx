import React from 'react';

import { Button, Select, Input } from 'antd';
import { useFormik } from 'formik';

import { IPatient } from '../../../interfaces/patient';
import ImageLoader from './ImageLoader';

type Props = {
  onSubmit: (patient: IPatient) => void;
  onCancel: () => void;
  patient?: IPatient;
  submitText?: string;
};

const PatientForm = ({ onSubmit, onCancel, patient, submitText }: Props) => {
  const { handleSubmit, handleChange, values, setFieldValue } = useFormik<IPatient>({
    initialValues: patient || {
      name: '',
      address: '',
      age: null,
      number: '',
      gender: '',
      img: ''
    },
    onSubmit: onSubmit
  });

  const handleGenderSelect = (value) => setFieldValue('gender', value);
  const handleStatusSelect = (value) => setFieldValue('status', value);

  const handleAddPatient = () => {
    onSubmit(values);
    onCancel();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <ImageLoader src={`${window.location.origin}/${values.img}`} />
        </div>

        <div className='form-group'>
          <Input
            placeholder='Name'
            name='name'
            type='text'
            defaultValue={values.name}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <Input
            placeholder='Phone'
            name='number'
            type='phone'
            defaultValue={values.number}
            onChange={handleChange}
          />
        </div>

        <div className='row'>
          <div className='col-sm-6 col-12'>
            <div className='form-group'>
              <Input
                placeholder='Age'
                name='age'
                type='number'
                defaultValue={values.age}
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

        {patient && (
          <div className='form-group'>
            <Select defaultValue={values.status} onChange={handleStatusSelect}>
              <Select.Option value='Male'>Approved</Select.Option>
              <Select.Option value='Female'>Pending</Select.Option>
            </Select>
          </div>
        )}

        <div className='form-group'>
          <Input
            name='address'
            placeholder='Address'
            onChange={handleChange}
            defaultValue={values.address}
          />
        </div>
      </form>

      <div className='d-flex justify-content-between buttons-list settings-actions'>
        <Button danger onClick={onCancel}>
          Cancel
        </Button>

        <Button onClick={handleAddPatient} type='primary' htmlType='submit'>
          {submitText || 'Add patient'}
        </Button>
      </div>
    </>
  );
};

export default PatientForm;
