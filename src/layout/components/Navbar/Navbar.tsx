import React, { CSSProperties, useLayoutEffect } from 'react';

import classNames from '../../../utils/classNames';

export interface SidebarProps {
  orientation?: 'vertical' | 'horizontal' | 'horizontal-vertical';
  height: string | number;
  opened?: boolean;
  boxed?: boolean;
  className?: string;
}

const Navbar: React.FC<SidebarProps> = ({
  height = 60,
  orientation = 'vertical',
  children,
  className = '',
  opened = false,
  boxed = false
}) => {
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
      <div className='navbar-wrap'>{children}</div>;
    </div>
  );
};

export default Navbar;
