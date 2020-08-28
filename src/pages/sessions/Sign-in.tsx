import React from 'react';

import { Button, Form, Input, Switch } from 'antd';
import { LoginOutlined } from '@ant-design/icons/lib';

import PublicLayout from '../../layout/public/Public';
import { Link } from 'react-router-dom';

const { Item } = Form;

const SignIn = () => {
  return (
    <PublicLayout bgImg={`${window.origin}/content/login-page.jpg`}>
      <h4 className='mb-0'>Login form</h4>

      <p className='text-muted'>Login to access your Account</p>

      <Form layout='vertical'>
        <Item>
          <Input placeholder='Login' />
        </Item>
        <Item>
          <Input placeholder='Password' type='password' />
        </Item>

        <div className='d-flex align-items-center mb-4'>
          <Switch defaultChecked /> <span className='ml-4'>Remember me</span>
        </div>
      </Form>

      <Button type='primary' icon={<LoginOutlined style={{ fontSize: '1.3rem' }} />}>
        <Link style={{ color: 'white' }} to='/'>
          Login
        </Link>
      </Button>
      <br />
      <p className='mb-0'>
        <a href='#'>Forgot password ?</a>
      </p>

      <p>
        Don't have an account? <Link to='sign-up'>Sign up</Link>
      </p>
    </PublicLayout>
  );
};

export default SignIn;
