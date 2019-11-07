import React, { CSSProperties, ReactNode } from 'react';

import classNames from '../../../utils/classNames';

import './Navbar.scss';

export type NavProps = {
  orientation: 'vertical' | 'horizontal' | 'horizontal-vertical';
  minHeight?: string | number;
  opened?: boolean;
  boxed?: boolean;
  className?: string;
  children?: ReactNode;
};

const Navbar = ({
  minHeight = 60,
  orientation,
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

  const navStyle: CSSProperties | undefined = minHeight ? { minHeight } : null;

  return (
    <div className={`navbar ${navClasses}`} style={navStyle}>
      <div className='navbar-wrap'>{children}</div>
    </div>
  );
};

export default Navbar;
