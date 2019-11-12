import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Badge, Button, Dropdown, Menu } from 'antd';

import './Actions.scss';

const accountItems = [
  { text: 'Edit account', icon: 'icofont-ui-home' },
  { text: 'User profile', icon: 'icofont-ui-user' },
  { text: 'Calendar', icon: 'icofont-ui-calendar' },
  { text: 'Settings', icon: 'icofont-ui-settings' },
  { text: 'Log Out', icon: 'icofont-logout' }
];

const notificatoins = [
  {
    text: 'Sara Crouch liked your photo',
    icon: 'icofont-heart',
    time: '17 minutes ago'
  },
  {
    text: 'New user registered',
    icon: 'icofont-users-alt-6',
    time: '23 minutes ago'
  },
  {
    text: 'Amanda Lie shared your post',
    icon: 'icofont-share',
    time: '25 minutes ago'
  },
  {
    text: 'New user registered',
    icon: 'icofont-users-alt-6',
    time: '32 minutes ago'
  },
  {
    text: 'You have a new message',
    icon: 'icofont-ui-message',
    time: '58 minutes ago'
  }
];

const homeRoute = 'vertical/default-dashboard';

const Actions = () => {
  const notificationsMenu = (
    <Menu className='action-menu' style={{ minWidth: '280px' }}>
      <span className='dropdown-header'>
        <h3 className='dropdown-title'>Notifications</h3>

        <a className='text-danger'>Clear all</a>
      </span>

      {notificatoins.map((item, index) => (
        <Menu.Item className='action-item' key={index}>
          <NavLink className='d-flex w-100' to={homeRoute}>
            <span className={`icon mr-3 ${item.icon}`} />
            <span className='text'>
              <span className='message'>{item.text}</span>
              <span className='sub-text'>{item.time}</span>
            </span>
          </NavLink>
        </Menu.Item>
      ))}

      <div className='dropdown-actions'>
        <Button type='primary' className='w-100'>
          View all notifications
          <span
            style={{ fontSize: '1.2rem' }}
            className='icofont-calendar ml-3'
          />
        </Button>
      </div>
    </Menu>
  );

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
    <div className='actions'>
      <Dropdown
        className='mr-3'
        overlay={notificationsMenu}
        trigger={['click']}
        placement='bottomRight'
      >
        <Badge className='action-badge' count={3}>
          <span
            className='icon notification-icon icofont-notification'
            style={{ fontSize: '22px', cursor: 'pointer' }}
          />
        </Badge>
      </Dropdown>

      <Dropdown
        overlay={accountMenu}
        trigger={['click']}
        placement='bottomRight'
      >
        <div className='item'>
          <Avatar
            size={40}
            className='mr-1'
            src={require('../../../assets/content/user-40-2.jpg')}
          />
          <span className='icofont-simple-down' />
        </div>
      </Dropdown>
    </div>
  );
};

export default Actions;
