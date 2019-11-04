import React from 'react';
import { NavLink } from 'react-router-dom';

export interface SimpleItemProps {
  title: string;
  routing: string;
  key: any;
  layout: string;
}

const SimpleItem: React.FC<SimpleItemProps> = ({
  routing,
  title,
  layout,
  key
}) => (
  <li className={`menu-item`} key={key}>
    <NavLink to={`/${layout}/${routing}`} activeClassName='active' replace>
      {title}
    </NavLink>
  </li>
);

export default SimpleItem;
