import React from 'react';

import { Button, Form, Input, Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons/lib';

import PublicLayout from '../../layout/Public/Public';
import { Link } from 'react-router-dom';

const { Item } = Form;

const SignUp = () => {
  return (
    <PublicLayout bgImg={`${window.origin}/content/register-page.jpg`}>
      <h4 className='mb-0'>Sign up</h4>
      <p className='text-muted'>Create your Account</p>

      <Form layout='vertical'>
        <Item>
          <Input placeholder='Login' />
        </Item>

        <Item>
          <Input placeholder='Password' type='password' />
        </Item>

        <Item>
          <Input placeholder='Confirm password' type='password' />
        </Item>

        <div className='d-flex align-items-center mb-4'>
          <Switch defaultChecked /> <span className='ml-4'>I agree to the Terms and Privacy.</span>
        </div>
      </Form>

      <Button
        type='primary'
        icon={<span className='icofont icofont-plus mr-2' style={{ fontSize: '1.2rem' }} />}
      >
        Register
      </Button>
      <br />

      <p>
        Have an account? <Link to='sign-in'>Sign in</Link>
      </p>
    </PublicLayout>
  );
};

export default SignUp;
