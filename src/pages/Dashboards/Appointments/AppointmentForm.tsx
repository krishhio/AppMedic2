import React from 'react';
import { useFormik } from 'formik';
import { IAppointment } from '../../../interfaces/patient';

import { Button, Input } from 'antd';
import ImageLoader from '../../../layout/components/Patients/ImageLoader';

type Props = {
  appointment?: IAppointment;
  onSubmit: (appointment: IAppointment) => void;
  onCancel: () => void;
  submitText?: string;
};

const AppointmentForm = ({
  appointment,
  onSubmit,
  onCancel,
  submitText = 'Add Appointment'
}: Props) => {
  const { handleChange, values } = useFormik<IAppointment>({
    initialValues: appointment || {
      date: '',
      doctor: '',
      email: '',
      fromTo: '',
      img: '',
      injury: '',
      name: '',
      number: '',
      from: '',
      to: ''
    },
    onSubmit
  });

  const [from, to] = values.fromTo.split('-');

  const handleSubmit = () => {
    onSubmit({ ...values, fromTo: `${values.from} - ${values.to}` });
  };

  return (
    <>
      <form>
        <div className='form-group'>
          <ImageLoader src={`${window.location.origin}/${values.img}`} />
        </div>

        <div className='form-group'>
          <Input
            defaultValue={values.name}
            placeholder='Name'
            name='name'
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <Input
            defaultValue={values.doctor}
            placeholder='Doctor'
            name='doctor'
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <Input
            defaultValue={values.email}
            placeholder='Email'
            name='email'
            type='email'
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <Input
            defaultValue={values.date}
            placeholder='Date'
            name='date'
            onChange={handleChange}
          />
        </div>

        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <div className='form-group'>
              <Input defaultValue={from} placeholder='From' name='from' onChange={handleChange} />
            </div>
          </div>

          <div className='col-sm-12 col-md-6'>
            <div className='form-group'>
              <Input defaultValue={to} placeholder='To' name='to' onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <Input
            defaultValue={values.number}
            placeholder='Number'
            name='number'
            type='phone'
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <Input
            defaultValue={values.injury}
            placeholder='Injury'
            name='injury'
            onChange={handleChange}
          />
        </div>
      </form>

      <div className='d-flex justify-content-between buttons-list settings-actions'>
        <Button danger onClick={onCancel}>
          Cancel
        </Button>

        <Button onClick={handleSubmit} type='primary' htmlType='submit'>
          {submitText}
        </Button>
      </div>
    </>
  );
};

export default AppointmentForm;
