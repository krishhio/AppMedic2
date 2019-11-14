import React, { FormEvent } from 'react';
import { Button, Form, Select, Input } from 'antd';
import { IPatient } from '../../../interfaces/patient';
import { FormComponentProps } from 'antd/es/form';

const { TextArea } = Input;

type OwnProps = {
  onAddPatient: (patient: IPatient) => void;
};

type Props = OwnProps & FormComponentProps;

const PatientForm = ({ onAddPatient, form }: Props) => {
  const { getFieldDecorator } = form;

  const handleSubmit = (e: FormEvent) => {};

  return (
    <Form layout='vertical' onSubmit={handleSubmit} className='settings-form'>
      <Form.Item>
        {getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: <span className='error-message'>Please enter patient name</span>
            },
            {
              min: 3,
              message: <span className='error-message'>Name must be at least 3 characters long</span>
            }
          ]
        })(<Input placeholder='Name' />)}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('number', {
          rules: [
            {
              required: true,
              message: <span className='error-message'>Please enter patient phone number</span>
            }
          ]
        })(<Input placeholder='Phone' type='phone' />)}
      </Form.Item>

      <div className='row'>
        <div className='col-sm-6 col-12'>
          <Form.Item>
            {getFieldDecorator('age', {
              rules: [
                {
                  required: true,
                  message: <span className='error-message'>Please enter patient age</span>
                }
              ]
            })(<Input placeholder='Age' type='number' />)}
          </Form.Item>
        </div>

        <div className='col-sm-6 col-12'>
          <Form.Item>
            {getFieldDecorator('gender', {
              rules: [
                {
                  required: true,
                  message: <span className='error-message'>Please select patient gender</span>
                }
              ]
            })(
              <Select>
                <Select.Option value='male'>Male</Select.Option>
                <Select.Option value='female'>Female</Select.Option>
              </Select>
            )}
          </Form.Item>
        </div>
      </div>

      <Form.Item>
        {getFieldDecorator('address', {
          rules: [
            {
              required: true,
              message: <span className='error-message'>Please enter patient address</span>
            }
          ]
        })(<TextArea placeholder='Address' rows={3} />)}
      </Form.Item>

      <Button htmlType='submit'>Add patient</Button>
    </Form>
  );
};

export default Form.create({ name: 'patients-form' })(PatientForm);
