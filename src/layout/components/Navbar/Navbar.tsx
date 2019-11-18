import React, { CSSProperties, ReactNode, useRef } from 'react';

import classNames from '../../../utils/classNames';

import './Navbar.scss';
import NavLoader from './NavLoader';
import useOutsideClick from '../../../Hooks/UseClickOutside';

export type NavProps = {
  orientation: 'vertical' | 'horizontal' | 'horizontal-vertical';
  minHeight?: string | number;
  opened?: boolean;
  boxed?: boolean;
  background?: string;
  color?: string;
  className?: string;
  children?: ReactNode;
  onClickOutside?: () => void;
};

const Navbar = ({
  minHeight = 60,
  background,
  orientation,
  children,
  className = '',
  opened = false,
  color,
  boxed = false,
  onClickOutside
}: NavProps) => {
  const containerRef = useRef(null);

  const handleClickOutside = () => (opened ? onClickOutside() : null);

  useOutsideClick(containerRef, handleClickOutside);
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

  return (
    <div ref={containerRef} className={`navbar ${navClasses}`} style={navStyle}>
      <div className='navbar-wrap'>{children}</div>
    </div>
  );
};

export default Navbar;
