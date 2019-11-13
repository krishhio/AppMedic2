import React, { CSSProperties, ReactNode } from 'react';

import classNames from '../../../utils/classNames';

import './Navbar.scss';
import NavLoader from './NavLoader';

export type NavProps = {
  orientation: 'vertical' | 'horizontal' | 'horizontal-vertical';
  minHeight?: string | number;
  opened?: boolean;
  boxed?: boolean;
  background?: string;
  color?: string;
  loaded?: boolean;
  className?: string;
  children?: ReactNode;
};

const Navbar = ({
  minHeight = 60,
  background,
  orientation,
  children,
  className = '',
  loaded,
  opened = false,
  color,
  boxed = false
}: NavProps) => {
  const navClasses = classNames({
    boxed,
    opened,
    [className]: !!className,
    [orientation]: true
  });

  const navStyle: CSSProperties = {
    background,
    minHeight,
    color
  };

  const loaderType = orientation === 'horizontal' ? 'top-bar' : 'nav-bar';

  return (
    <div className={`navbar ${navClasses}`} style={navStyle}>
      <div className='navbar-wrap'>
        {children}
        <NavLoader loaded={loaded} type={loaderType} />
      </div>
    </div>
  );
};

export default Navbar;
