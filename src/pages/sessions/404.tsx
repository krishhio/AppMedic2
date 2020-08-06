import React from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import BaseErrorPage from './BaseErrorPage';
import { HomeFilled } from '@ant-design/icons/lib';

const NotFound = () => (
  <BaseErrorPage
    subTitle={
      <h6 className='text-md text-center'>Sorry! The page you were looking for doesn't exist.</h6>
    }
    bg={`${window.origin}/content/404-page.jpg`}
    action={
      <Button
        type='primary'
        style={{ width: 'auto' }}
        icon={<HomeFilled className='mr-3' style={{ fontSize: '1.3em' }} />}
      >
        <Link style={{ color: 'white' }} to='/'>
          Back to Home
        </Link>
      </Button>
    }
    title={
      <h1 style={{ fontSize: '6rem' }} className='text-color-300 text-center'>
        <i className='icofont-radio-active color-error mr-2' />
        404
      </h1>
    }
  />
);

export default NotFound;
