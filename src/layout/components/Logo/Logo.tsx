import React from 'react';

import './Logo.scss';

type Props = {
  src: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
};

const Logo = ({ alt = '', height = 'auto', width = 'auto', src }: Props) => {
  return (
    <div className='logo'>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='logo-img'
      />
    </div>
  );
};

export default Logo;
