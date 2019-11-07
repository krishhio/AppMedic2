import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import { Button } from 'antd';

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
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios('./data/menu.json');
      setMenuData(result.data);
    }

    fetchData().catch(err => console.log('Server Error', err));
  }, []);

  const sideNav = (
    <Navbar orientation='vertical'>
      <Logo src={LogoSvg} />

      <Menu orientation='vertical' data={menuData} />

      <div className='add-patient'>
        <Button type='primary'>
          <span
            className='icofont icofont-plus mr-2'
            style={{ fontSize: '1.3em' }}
          />
          Add patient
        </Button>
      </div>

      <Menu className='assistant-menu' orientation='vertical'>
        <NavLink
          className='link'
          to='/vertical/vertical'
          activeClassName='active'
          replace
        >
          <span className='link-icon icofont icofont-ui-settings' />

          <span className='link-text'>Settings</span>
        </NavLink>

        <NavLink
          className='link'
          to='/vertical/default-dashboard'
          activeClassName='active'
          replace
        >
          <span className='link-icon icofont icofont-question-square' />

          <span className='link-text'>FAQ & Support</span>
        </NavLink>
      </Menu>
    </Navbar>
  );

  const nav = <Navbar orientation='horizontal'>Nav</Navbar>;
  return (
    <>
      <BaseLayout nav={nav} sideNav={sideNav}>
        {children}
      </BaseLayout>
    </>
  );
};

export default VerticalLayout;
