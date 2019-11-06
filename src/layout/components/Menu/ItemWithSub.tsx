import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { Location, History } from 'history';
import { IMenuItemIcon, IMenuItemSub } from '../../../interfaces/main-menu';

import posed from 'react-pose';

import className from '../../../utils/classNames';

const isHorizontal = (layout: string) =>
  window.innerWidth >= 992 && layout === 'horizontal';

type RouterProps = {
  location: Location;
  history: History;
};

type OwnProps = {
  sub?: IMenuItemSub[];
  icon?: IMenuItemIcon;
  title?: string;
  handleClick?: () => void;
  layout?: string;
  opened?: boolean;
};

type Props = RouterProps & OwnProps;

const Sub = posed.div({
  closed: { height: 0, opacity: 0, overflow: 'hidden' },
  open: { height: 'auto', opacity: 1 },
  transition: { ease: 'ease-in-out', duration: 250 }
});

const ItemWithSub = withRouter(
  ({ location, title, layout, sub, opened, icon, handleClick }: Props) => {
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

    const itemIcon = icon && (
      <span
        className={`link-icon ${icon.class}`}
        style={{ backgroundColor: icon.bg, color: icon.color }}
      />
    );

    return (
      <>
        <li
          className={`menu-item has-sub ${opened ? 'active' : ''}`}
          onClick={handleClick}
        >
          <span className='item-link'>
            {itemIcon}

            <span className='link-text'>{title}</span>

            <span className='link-caret icofont-rounded-right' />
          </span>

          {isHorizontal(layout) ? (
            <ul className='sub' onClick={e => e.stopPropagation()}>
              {itemSub}
            </ul>
          ) : (
            <Sub
              style={{ transform: 'translateY(5px)' }}
              onClick={e => e.stopPropagation()}
              pose={opened ? 'open' : 'closed'}
            >
              <ul className='sub'>{itemSub}</ul>
            </Sub>
          )}
        </li>
      </>
    );
  }
);

export default ItemWithSub;
