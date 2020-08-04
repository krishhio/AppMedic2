import React from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import BaseErrorPage from './BaseErrorPage';

const NotFound = () => {
  const notFoundProps: Parameters<typeof BaseErrorPage>[0] = {
    action: (
      <Button>
        <Link to='dashboard'>Go Home</Link>
      </Button>
    ),
    msg: "Sorry! The page you were looking for doesn't exist.",
    bg: '',
    title: 'Error!'
  };

  return <BaseErrorPage {...notFoundProps} />;
};

export default NotFound;
