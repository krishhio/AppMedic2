import BaseErrorPage from './BaseErrorPage';
import { Button } from 'antd';
import { HomeFilled } from '@ant-design/icons/lib';
import { Link } from 'react-router-dom';
import React from 'react';

const InternalError = () => (
  <BaseErrorPage
    subTitle={
      <h6 className='text-md text-center'>Oopps. There was an error, please try again later.</h6>
    }
    msg='The server encountered an internal server error and was unable to complete your request.'
    bg={`${window.origin}/content/500-page.jpg`}
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
        <i className='icofont-exclamation-tringle  color-error mr-2' />
        500
      </h1>
    }
  />
);

export default InternalError;
