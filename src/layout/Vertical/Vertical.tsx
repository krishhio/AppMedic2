import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

import { DataSourceItemType } from 'antd/es/auto-complete';

import BaseLayout from '../Base/BaseLayout';

import Logo from '../components/Logo/Logo';
import Navbar from '../components/Navbar/Navbar';
import LogoSvg from './../../assets/img/logo.svg';
import Menu from '../components/Menu/Menu';
import Search from '../components/Search/Search';

import './Vertical.scss';
import { IMenuItem, IMenuItemSub } from '../../interfaces/main-menu';
import Actions from '../components/Actions/Actions';

type Props = {
  children: any;
};

const VerticalLayout = ({ children }: Props) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    async function fetchMenuData() {
      const result = await axios('./data/menu.json');
      setMenuData(result.data);
    }

    fetchMenuData().catch(err => console.log('Server Error', err));
  }, []);

  const [searchData, setSearchData] = useState<DataSourceItemType[]>([]);

  useEffect(() => {
    async function fetchSearchData() {
      const result = await axios('./data/menu.json');
      const data = result.data;

      const hasRouting = (item: IMenuItem) => !!item.routing;
      const hasSub = (item: IMenuItem) => !!item.sub;

      const getOption = (item: IMenuItem | IMenuItemSub) => ({
        text: item.title,
        value: item.routing
      });

      const setSubTitle = (itemTitle: string) => (subItem: IMenuItemSub) => ({
        ...subItem,
        title: `${itemTitle} > ${subItem.title}`
      });

      const menuItems = data.filter(hasRouting);

      const menuItemsWithSub = data
        .filter(hasSub)
        .map((item: IMenuItem) => ({
          ...item,
          sub: item.sub.map(setSubTitle(item.title))
        }))
        .map((item: IMenuItem) => item.sub)
        .flat();

      const searchOptions = [...menuItems, ...menuItemsWithSub].map(getOption);

      setSearchData(searchOptions || []);
    }

    fetchSearchData().catch(err => console.log('Server Error', err));
  }, []);

  const nav = (
    <Navbar orientation='horizontal'>
      <Search layout='vertical' data={searchData} />

      <Actions />
    </Navbar>
  );

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

  return (
    <>
      <BaseLayout nav={nav} sideNav={sideNav}>
        {children}
      </BaseLayout>
    </>
  );
};

export default VerticalLayout;
