import React from 'react';

interface MenuGroupTitleProps {
  key: any;
  title: string;
}

const MenuGroupTitle: React.FC<MenuGroupTitleProps> = ({ key, title }) => (
  <li className='menu-item group' key={key}>
    <span>{title}</span>
  </li>
);

export default MenuGroupTitle;
