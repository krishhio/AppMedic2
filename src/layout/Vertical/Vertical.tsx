import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import BaseLayout from '../Base/BaseLayout';

type Props = {
  children: any;
};

const VerticalLayout = ({ children }: Props) => {
  const nav = <Navbar>Nav</Navbar>;
  const sideNav = <Navbar orientation='vertical'></Navbar>;
  return <BaseLayout nav={nav}>{children}</BaseLayout>;
};

export default VerticalLayout;
