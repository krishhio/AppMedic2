import React from 'react';
import { useFormik } from 'formik';
import { IAppointment } from '../../interfaces/patient';

import { Button, Input } from 'antd';
import ImageLoader from '../../layout/components/Patients/ImageLoader';

type Props = {
  appointment?: IAppointment;
  onSubmit: (appointment: IAppointment) => void;
  onCancel: () => void;
  submitText?: string;
};

const AppointmentForm = ({ appointment, onSubmit, onCancel, submitText }: Props) => {
  const { handleChange, values } = useFormik<IAppointment>({
    initialValues: appointment || {
      date: '',
      doctor: '',
      email: '',
      fromTo: '',
      img: '',
      injury: '',
      name: '',
      number: ''
    },
    onSubmit
  });

  const [from, to] = values.fromTo.split('-');

  const handleAddAppointment = () => onSubmit(values);

  return (
    <>
      <form>
        <div className='form-group'>
          <ImageLoader src={`${window.location.origin}/${values.img}`} />
        </div>

        <div className='form-group'>
          <Input defaultValue={values.name} name='name' onChange={handleChange} />
        </div>

        <div className='form-group'>
          <Input defaultValue={values.doctor} name='doctor' onChange={handleChange} />
        </div>

        <div className='form-group'>
          <Input defaultValue={values.email} name='email' type='email' onChange={handleChange} />
        </div>

        <div className='form-group'>
          <Input defaultValue={values.date} name='date' onChange={handleChange} />
        </div>

        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <div className='form-group'>
              <Input defaultValue={from} name='from' onChange={handleChange} />
            </div>
          </div>

          <div className='col-sm-12 col-md-6'>
            <div className='form-group'>
              <Input defaultValue={to} name='to' onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <Input defaultValue={values.number} name='number' type='phone' onChange={handleChange} />
        </div>

        <div className='form-group'>
          <Input defaultValue={values.injury} name='injury' onChange={handleChange} />
        </div>
      </form>

      <div className='d-flex justify-content-between buttons-list settings-actions'>
        <Button type='danger' onClick={onCancel}>
          Cancel
        </Button>

        <Button onClick={handleAddAppointment} type='primary' htmlType='submit'>
          { submitText || 'Add appointment' }
        </Button>
      </div>
    </>
  );
};

export default AppointmentForm;
