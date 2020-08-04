import React, { ReactNode } from 'react';

type Props = { children: ReactNode; bgImg?: string };

const PublicLayout = ({ children, bgImg }: Props) => {
  return (
    <>
      <div className='public-layout'>
        <div className='content-box'>{children}</div>
      </div>
    </>
  );
};

export default PublicLayout;
