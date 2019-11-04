import React from 'react';

import { IMenuItem } from '../../../interfaces/main-menu';

import className from '../../../utils/classNames';

import MenuGroupTitle from './GroupTitle';
import ItemWithSub from './ItemWithSub';
import SimpleItem from './SimpleItem';

import './Menu.scss';

interface MenuProps {
  orientation?: 'vertical' | 'horizontal';
  layout: string;
  data: IMenuItem[];
}

const Menu: React.FunctionComponent<MenuProps> = ({
  layout,
  data,
  orientation
}) => {
  const menuClasses = className({
    menu: true,
    horizontal: orientation === 'horizontal'
  });

  const menuItems = data.map((item: IMenuItem, i: number) => {
    if (item.groupTitle) {
      return <MenuGroupTitle key={i} title={item.title} />;
    }

    if (item.sub) {
      return <ItemWithSub key={i} layout={layout} sub={item.sub} {...item} />;
    }

    return <SimpleItem key={i} layout={layout} {...item} />;
  });

  return (
    <div className={menuClasses}>
      <nav className='main-menu-wrap'>
        <ul className='menu-ul'>{menuItems}</ul>
      </nav>
    </div>
  );
};

export default Menu;
