import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import userAvatar from '../../../../public/content/user-40-2.jpg';
const accountItems = [
  { text: 'Edit account', icon: 'icofont-ui-home' },
  { text: 'User profile', icon: 'icofont-ui-user' },
  { text: 'Calendar', icon: 'icofont-ui-calendar' },
  { text: 'Settings', icon: 'icofont-ui-settings' },
  { text: 'Log Out', icon: 'icofont-logout' }
];

const homeRoute = 'vertical/default-dashboard';

const SettingsDropdown = () => {
  const accountMenu = (
    <Menu style={{ minWidth: '180px' }}>
      {accountItems.map((item, index) => (
        <Menu.Item className='action-item' key={index}>
          <NavLink className='d-flex w-100' to={homeRoute}>
            <span className={`icon mr-3 ${item.icon}`} />
            <span className='text'>{item.text}</span>
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={accountMenu} trigger={['click']} placement='bottomRight'>
      <div className='item'>
        <Avatar size={40} className='mr-1' src={`${window.location.origin}/content/user-40-2.jpg`} />
        <span className='icofont-simple-down' />
      </div>
    </Dropdown>
  );
};

export default SettingsDropdown;
