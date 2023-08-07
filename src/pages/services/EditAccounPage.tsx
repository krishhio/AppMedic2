import React, { ChangeEvent, useState } from 'react';

import { useFormik } from 'formik';
import { Button, Divider, Form, Input, Select } from 'antd';

import ImageLoader from '../../layout/components/patients/ImageLoader';

import { usePageData } from '../../hooks/usePage';
import { useGetUser } from '../../hooks/useGetUser';

import { IPageData } from '../../interfaces/page';
import { IPatient } from '../../interfaces/patient';

const pageData: IPageData = {
  title: 'Editar Cuenta',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Apps',
      route: 'default-dashboard'
    },
    {
      title: 'Service Pages ',
      route: 'default-dashboard'
    },
    {
      title: 'Edit Account'
    }
  ]
};

const FormItem = Form.Item;
const Option = Select.Option;

const UserAvatar = ({ src, className = null }) => {
  return (
    <div className={`avatar-wrapper ${className}`}>
      <ImageLoader src={src} size={100} />
    </div>
  );
};

const AccountForm = ({ user }) => {
  const [submitted, setSubmitted] = useState({ ...user });
  const { values, setValues, handleSubmit } = useFormik<IPatient>({
    onSubmit: (values) => setSubmitted(values),
    initialValues: { ...user }
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name) => (value) => {
    setValues({ ...values, [name]: value });
  };

  const hasChanged = Object.keys(values).some((key) => values[key] !== submitted[key]);

  return (
    <Form layout='vertical'>
      <FormItem label='Nombre'>
        <Input
          name='name'
          onChange={handleChange}
          placeholder='Nombre'
          defaultValue={values.name}
        />
      </FormItem>

      <FormItem label='Apellido'>
        <Input
          name='lastName'
          onChange={handleChange}
          defaultValue={values.lastName}
          placeholder='Apellido'
        />
      </FormItem>

      <FormItem label='Edad'>
        <Input
          type='number'
          name='age'
          onChange={handleChange}
          defaultValue={values.age}
          placeholder='Edad'
        />
      </FormItem>

      <FormItem label='Gender'>
        <Select
          onChange={handleSelectChange('gender')}
          defaultValue={values.gender}
          placeholder='Genero'
        >
          <Option value='male'>Masculino</Option>
          <Option value='female'>Femenino</Option>
        </Select>
      </FormItem>

      <FormItem label='Numero Telefónico'>
        <Input
          type='number'
          name='number'
          onChange={handleChange}
          defaultValue={values.number}
          placeholder='Numero Telefónico'
        />
      </FormItem>

      <FormItem label='Dirección'>
        <Input.TextArea
          name='address'
          onChange={handleChange}
          rows={4}
          defaultValue={values.address}
          placeholder='Dirección'
        />
      </FormItem>

      <FormItem label='Última Visita'>
        <Input defaultValue={values.lastVisit} placeholder='Última Visita' readOnly />
      </FormItem>

      <FormItem label='Status'>
        <Select
          defaultValue={values.status}
          placeholder='Estatu'
          onChange={handleSelectChange('status')}
        >
          <Option value='approved'>Aprobado</Option>
          <Option value='pending'>Pendiente</Option>
        </Select>
      </FormItem>

      <div className='elem-list justify-content-between'>
        <Button disabled={!hasChanged} className='bg-color-success' onClick={() => handleSubmit()}>
          <span className='text-color-500'>Guardar Cambios</span>
        </Button>

        <Button ghost danger className='ml-auto'>
          Borrar Cuenta
        </Button>
      </div>
    </Form>
  );
};

const PasswordForm = () => {
  return (
    <Form layout='vertical'>
      <FormItem label='Contraseña Actual'>
        <Input.Password placeholder='Contraseña Actual' />
      </FormItem>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <FormItem
            name='password'
            label='Nueva Contraseña'
            rules={[{ required: true, message: 'Please enter new password' }]}
          >
            <Input.Password placeholder='Nueva Contraseña' />
          </FormItem>
        </div>

        <div className='col-md-6 col-sm-12'>
          <FormItem
            name='confirmPassword'
            label='Confirmar Contraseña'
            rules={[
              {
                required: true,
                message: 'Por Favor, confirma tu contraseña!'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('No coinciden las 2 contraseñas!');
                }
              })
            ]}
          >
            <Input.Password placeholder='Confirmar Contraseña' />
          </FormItem>
        </div>
      </div>

      <Button type='primary'>Confirmar Contraseña</Button>
    </Form>
  );
};

const EditAccountPage = () => {
  const user = useGetUser();
  usePageData(pageData);
  return (
    <div className='stack' style={{ maxWidth: 690, margin: '0 auto' }}>
      <UserAvatar className='mt-0' src={user.img} />
      <AccountForm user={user} />

      <Divider />

      <PasswordForm />
    </div>
  );
};

export default EditAccountPage;
