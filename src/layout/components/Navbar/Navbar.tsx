import React, { CSSProperties, ReactNode, useLayoutEffect } from 'react';

import classNames from '../../../utils/classNames';

import './Navbar.scss';

export type NavProps = {
  orientation?: 'vertical' | 'horizontal' | 'horizontal-vertical';
  height?: string | number;
  opened?: boolean;
  boxed?: boolean;
  className?: string;
  children?: ReactNode;
};

const Navbar = ({
  height = 60,
  orientation = 'vertical',
  children,
  className = '',
  opened = false,
  boxed = false
}: NavProps) => {
  const navClasses = classNames({
    boxed,
    opened,
    className,
    vertical: orientation === 'vertical',
    horizontal: orientation !== 'vertical'
  });

  const navStyle: CSSProperties = {
    height: typeof height === 'string' ? height : `${height}px`
  };

  return (
    <div className={`navbar ${navClasses}`} style={navStyle}>
      <div className='navbar-wrap'>{children}</div>
    </div>
  );
};

export default Navbar;
