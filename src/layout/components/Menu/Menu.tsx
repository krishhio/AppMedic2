import React from 'react';

import { IMenuItem } from '../../../interfaces/main-menu';

import className from '../../../utils/classNames';

import MenuGroupTitle from './GroupTitle';
import ItemWithSub from './ItemWithSub';
import SimpleItem from './SimpleItem';

import './Menu.scss';

interface MenuProps {
  orientation?: 'vertical' | 'horizontal';
  data: IMenuItem[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ data, orientation }) => {
  const menuClasses = className({
    'main-menu': true,
    horizontal: orientation === 'horizontal'
  });

  const menuItems = data.map((item: IMenuItem, i: number) => {
    console.log(item);
    if (item.groupTitle) {
      return <MenuGroupTitle key={i} title={item.title} />;
    }

    if (item.sub) {
      return (
        <ItemWithSub key={i} layout={orientation} sub={item.sub} {...item} />
      );
    }

    return <SimpleItem key={i} layout={orientation} title={item.title} routing={item.routing} />;
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
