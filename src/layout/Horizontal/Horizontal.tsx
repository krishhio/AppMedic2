import React, { ReactElement, useEffect, useState } from 'react';

import axios from 'axios';

import { DataSourceItemType } from 'antd/es/auto-complete';

import BaseLayout from '../Base/BaseLayout';

import Logo from '../components/Logo/Logo';
import Navbar from '../components/Navbar/Navbar';
import LogoSvg from './../../assets/img/logo.svg';
import Menu from '../components/Menu/Menu';
import Search from '../components/Search/Search';

import './Horizontal.scss';
import { IMenuItem, IMenuItemSub } from '../../interfaces/main-menu';
import Actions from '../components/Actions/Actions';
import { Dispatch } from 'redux';
import { resetSettings, toggleSidebar, updateSettings } from '../../redux/settings/actions';
import { connect } from 'react-redux';
import { IPageData } from '../../interfaces/page';
import { IPatient } from '../../interfaces/patient';
import { IAppSettings } from '../../interfaces/settings';

type OwnProps = {
  children: any;
};

type StateProps = {
  pageData: IPageData;
  patients: IPatient[];
  settings: IAppSettings;
};

type DispatchProps = {
  onSidebarToggle: () => void;
  onUpdateSettings: (settings: IAppSettings) => void;
  onResetSettings: () => void;
};

type Props = OwnProps & StateProps & DispatchProps;

const HorizontalLayout = ({ children, onSidebarToggle, settings, pageData }: Props) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    async function fetchMenuData() {
      const result = await axios('/data/menu-horizontal.json');
      setMenuData(result.data);
    }

    fetchMenuData().catch((err) => console.log('Server Error', err));
  }, []);

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    async function fetchSearchData() {
      const result = await axios('/data/menu.json');
      const data = result.data;

      const hasRouting = (item: IMenuItem) => !!item.routing;
      const hasSub = (item: IMenuItem) => !!item.sub;

      const getOption = (item: IMenuItem | IMenuItemSub) => ({
        text: item.title,
        value: item.routing,
      });

      const setSubTitle = (itemTitle: string) => (subItem: IMenuItemSub) => ({
        ...subItem,
        title: `${itemTitle} > ${subItem.title}`,
      });

      const menuItems = data.filter(hasRouting);

      const menuItemsWithSub = data
        .filter(hasSub)
        .map((item: IMenuItem) => ({
          ...item,
          sub: item.sub.map(setSubTitle(item.title)),
        }))
        .map((item: IMenuItem) => item.sub)
        .flat();

      const searchOptions = [...menuItems, ...menuItemsWithSub].map(getOption);

      setSearchData(searchOptions || []);
    }

    fetchSearchData().catch((err) => console.log('Server Error', err));
  }, []);

  const nav = (
    <Navbar orientation='horizontal' boxed={settings.boxed}>
      <button className='no-style navbar-toggle d-lg-none' onClick={onSidebarToggle}>
        <span />
        <span />
        <span />
      </button>

      <Logo src={LogoSvg} />

      <Search layout='vertical' data={searchData} />

      <Actions />
    </Navbar>
  );

  const additionalNav = (
    <Navbar minHeight={40} orientation='horizontal-vertical' boxed={settings.boxed}>
      <Menu
        onCloseSidebar={onSidebarToggle}
        opened={settings.sidebarOpened}
        orientation='horizontal'
        data={menuData}
      />
    </Navbar>
  );

  return (
    <>
      <BaseLayout orientation='horizontal' nav={nav} topNav={additionalNav}>
        {children}
      </BaseLayout>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onResetSettings: () => dispatch(resetSettings()),
  onSidebarToggle: () => dispatch(toggleSidebar()),
  onUpdateSettings: (settings) => dispatch(updateSettings(settings)),
});

const mapStateToProps = ({ patients, pageData, settings }) => ({
  settings,
  pageData,
  patients,
});

const ConnectedLayout: (props: OwnProps) => ReactElement = connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalLayout);

export default ConnectedLayout;
