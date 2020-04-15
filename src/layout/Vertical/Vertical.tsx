import React, { ReactElement, useEffect, useState } from 'react';

import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Dispatch } from 'redux';

import BaseLayout from '../Base/BaseLayout';

import Logo from '../components/Logo/Logo';
import Navbar from '../components/Navbar/Navbar';
import LogoSvg from './../../assets/img/logo.svg';

import Menu from '../components/Menu/Menu';
import Search from '../components/Search/Search';
import NavLoader from '../components/Navbar/NavLoader';
import AddPatient from '../components/Patients/AddPatient';

import Actions from '../components/Actions/Actions';
import { resetSettings, toggleSidebar, updateSettings } from '../../redux/settings/actions';

import { connect } from 'react-redux';

import { IPageData } from '../../interfaces/page';
import { IPatient } from '../../interfaces/patient';
import { IAppSettings } from '../../interfaces/settings';
import { IMenuItem, IMenuItemSub } from '../../interfaces/main-menu';

import './Vertical.scss';

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

const VerticalLayout = ({ children, onSidebarToggle, settings, pageData }: Props) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    async function fetchMenuData() {
      const result = await axios('/data/menu.json');
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
    <Navbar
      boxed={settings.boxed}
      color={settings.topbarColor}
      background={settings.topbarBg}
      orientation='horizontal'
    >
      <button className='no-style navbar-toggle d-lg-none' onClick={onSidebarToggle}>
        <span />
        <span />
        <span />
      </button>

      <Search layout='vertical' data={searchData} />

      <Actions />

      <NavLoader loaded={pageData.loaded} type={'top-bar'} />
    </Navbar>
  );

  const sideNav = (
    <Navbar
      onClickOutside={onSidebarToggle}
      opened={settings.sidebarOpened}
      color={settings.sidebarColor}
      background={settings.sidebarBg}
      orientation='vertical'
    >
      <Logo src={LogoSvg} />

      <Menu
        onCloseSidebar={onSidebarToggle}
        opened={settings.sidebarOpened}
        orientation='vertical'
        data={menuData}
      />

      <AddPatient />

      <Menu className='assistant-menu' orientation='vertical'>
        <NavLink className='link' to='/vertical/settings' activeClassName='active' replace>
          <span className='link-icon icofont icofont-ui-settings' />

          <span className='link-text'>Settings</span>
        </NavLink>

        <NavLink className='link' to='/vertical/default-dashboard' activeClassName='active' replace>
          <span className='link-icon icofont icofont-question-square' />

          <span className='link-text'>FAQ & Support</span>
        </NavLink>

        {}
      </Menu>

      <NavLoader loaded={pageData.loaded} type={'nav-bar'} />
    </Navbar>
  );

  return (
    <>
      <BaseLayout orientation='vertical' nav={nav} sideNav={sideNav}>
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
)(VerticalLayout);

export default ConnectedLayout;
