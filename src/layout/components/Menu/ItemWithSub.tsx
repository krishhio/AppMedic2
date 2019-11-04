import React from 'react';
import { withRouter, RouteComponentProps, NavLink } from 'react-router-dom';

import { SimpleItemProps } from './SimpleItem';
import { IMenuItemSub } from '../../../interfaces/main-menu';
import className from '../../../utils/classNames';

export interface ItemWithSubProps extends Omit<SimpleItemProps, 'badge'> {
  active?: boolean;
  sub: IMenuItemSub[];
}

const isHorizontal = (layout: string) =>
  window.innerWidth >= 992 && layout === 'horizontal';

const ItemWithSub: React.FC<ItemWithSubProps> = ({
  sub,
  active,
  title,
  layout,
  routing
}) => {
  const subItemClass = (routing: string) =>
    className({
      'menu-item': true,
      active: routing === location.pathname.split('/')[2]
    });

  const itemSub = sub.map((item: IMenuItemSub, i: number) => (
    <li className={subItemClass(item.routing)} key={i}>
      <NavLink
        to={`/${item.layout || layout}/${item.routing}`}
        className='item-link'
        activeClassName='active'
        replace
      >
        <span className='link-text'>{item.title}</span>
      </NavLink>
    </li>
  ));

  return (
    <>
      <li className={`menu-item`}>
        <NavLink to={`/${layout}/${routing}`} activeClassName='active' replace>
          {title}
        </NavLink>

        {itemSub}
      </li>
    </>
  );
};

export default ItemWithSub;
