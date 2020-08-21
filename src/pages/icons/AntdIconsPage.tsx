import React from 'react';

import { Icon } from '@ant-design/compatible';

import { IconWrap } from './IconWrap';
import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';

import iconsList from './antd-icons';

const getIconTuple = (list) => Object.keys(list).map((key) => [key, list[key]]);
const icons = getIconTuple(iconsList);

const pageData: IPageData = {
  title: 'Icons',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'default-dashboard'
    },
    {
      title: 'UI Kit ',
      route: 'default-dashboard'
    },
    {
      title: 'Icons'
    }
  ]
};

const AntdIconsPage = () => {
  usePageData(pageData);

  return (
    <>
      {icons.map(([key, icons]) => (
        <div key={key}>
          <h4 className='section-title mb-4'>{key}</h4>

          <div className='elem-list'>
            {icons.map((icon) => (
              <IconWrap key={icon}>
                <Icon style={{ fontSize: 20 }} type={icon} />
                <span className='selector'>{icon}</span>
              </IconWrap>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default AntdIconsPage;
