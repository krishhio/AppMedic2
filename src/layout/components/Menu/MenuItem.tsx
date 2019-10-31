import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItemProps {
  badge: Element;
  text: string;
  route: string;
  layout: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ badge, route, text, layout }) => {
  return (
    <li className={`menu-item`}>
      <NavLink to={`/${layout}/${route}`} activeClassName='active' replace>
        {text}
      </NavLink>
      {badge}
    </li>
  );
};

export default MenuItem;
