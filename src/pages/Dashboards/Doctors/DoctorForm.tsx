import React from 'react';

import { useFormik } from 'formik';
import { Form, Button, Input, Select, AutoComplete, Divider } from 'antd';

import Socials from '../../../layout/components/Socials/Socials';
import ImageLoader from '../../../layout/components/Patients/ImageLoader';

import { useFetch } from '../../../hooks/useFetch';
import { IUser } from '../../../interfaces/user';

type Props = {
  onSubmit: (doctor: IUser) => void;
  onCancel: () => void;
};

const initialValues = {
  social: [
    {
      icon: 'icofont-instagram',
      link: '#'
    },
    {
      icon: 'icofont-facebook',
      link: '#'
    },
    {
      icon: 'icofont-twitter',
      link: '#'
    }
  ],
  profileLink: '',
  role: '',
  name: '',
  lastName: '',
  img: '',
  gender: null,
  address: ''
};

const DoctorForm = ({ onSubmit, onCancel }: Props) => {
  const [roles] = useFetch<{ value: string }[]>('./data/doctors-specialists.json', []);
  const { values, handleChange, setValues } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log('submitting');
      onSubmit(values);
    }
  });

  const handleGenderSelect = (gender) => {
    setValues({ ...values, gender });
  };

  const handleRoleSelect = (role) => {
    setValues({ ...values, role });
  };

  const handleImgLoad = (img) => {
    setValues({ ...values, img });
  };

  const handleSubmit = () => {
    onSubmit(values);
    onCancel();
  };

  return (
    <>
      <Form>
        <div className='form-group'>
          <ImageLoader onLoad={handleImgLoad} src={`${window.location.origin}/${values.img}`} />
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
              <AutoComplete
                filterOption
                options={roles}
                placeholder='Speciality'
                onChange={handleRoleSelect}
                defaultValue={values.role}
              />
            </div>
          </div>

          <div className='col-sm-6 col-12'>
            <div className='form-group'>
              <Select
                placeholder='Gender'
                defaultValue={values.gender}
                onChange={handleGenderSelect}
              >
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

        <Divider />

        <Socials links={values.social} />

        <div className='d-flex justify-content-between buttons-list settings-actions mt-4'>
          <Button danger onClick={onCancel}>
            Cancel
          </Button>

          <Button onClick={handleSubmit} htmlType='submit' type='primary'>
            Add Doctor
          </Button>
        </div>
      </Form>
    </>
  );
};

export default DoctorForm;
