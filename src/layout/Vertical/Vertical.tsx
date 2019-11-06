import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import BaseLayout from '../Base/BaseLayout';

import Logo from '../components/Logo/Logo';
import LogoSvg from './../../assets/img/logo.svg';

import Menu from '../components/Menu/Menu';

import './Vertical.scss';

type Props = {
  children: any;
};

const VerticalLayout = ({ children }: Props) => {
  const nav = <Navbar orientation='horizontal'>Nav</Navbar>;

  const sideNav = (
    <Navbar orientation='vertical'>
      <Logo src={LogoSvg} />

      <Menu orientation='vertical' data={[{title: 'test-sub', sub: [{ routing: '', title: 'test-sub' }] }]} />
    </Navbar>
  );

  return (
    <>
      <BaseLayout nav={nav} sideNav={sideNav}>
        {children}
      </BaseLayout>
    </>
  );
};

export default VerticalLayout;
