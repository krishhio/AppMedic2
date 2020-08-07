import React from 'react';
import PublicLayout from '../../layout/Public/Public';
import { Form, Input, Switch } from 'antd';
const { Item } = Form;
const SignIn = () => {
  return (
    <PublicLayout bgImg={`${window.origin}/content/login-page.jpg`}>
      <Form layout='vertical'>
        <Item>
          <Input placeholder='Login' />
        </Item>

        <Item>
          <Input placeholder='Password' type='password' />
        </Item>
        <Item>
          <Switch defaultChecked /> Remember me
        </Item>
      </Form>
    </PublicLayout>
  );
};

export default SignIn;
