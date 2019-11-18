import React from 'react';

import { Button, Select, Input } from 'antd';
import { useFormik } from 'formik';

import { IPatient } from '../../../interfaces/patient';
import ImageLoader from './ImageLoader';

type Props = {
  onAddPatient: (patient: IPatient) => void;
  onCancel: () => void;
};

const PatientForm = ({ onAddPatient, onCancel }: Props) => {
  const { handleSubmit, handleChange, values, setFieldValue } = useFormik<IPatient>({
    initialValues: {
      name: '',
      address: '',
      age: '',
      number: '',
      gender: '',
      img: ''
    },
    onSubmit: onAddPatient
  });

  const handleGenderSelect = value => setFieldValue('gender', value);

  const handleAddPatient = () => onAddPatient(values);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <ImageLoader />
        </div>

        <div className='form-group'>
          <Input placeholder='Name' name='name' type='text' onChange={handleChange} />
        </div>

        <div className='form-group'>
          <Input placeholder='Phone' name='number' type='phone' onChange={handleChange} />
        </div>

        <div className='row'>
          <div className='col-sm-6 col-12'>
            <div className='form-group'>
              <Input placeholder='Age' name='age' type='number' onChange={handleChange} />
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
          <Input placeholder='Address' name='address' type='text' onChange={handleChange} />
        </div>
      </form>

      <div className='d-flex justify-content-between buttons-list settings-actions'>
        <Button type='danger' onClick={onCancel}>
          Cancel
        </Button>

        <Button onClick={handleAddPatient} type='primary' htmlType='submit'>
          Add patient
        </Button>
      </div>
    </>
  );
};

export default PatientForm;
