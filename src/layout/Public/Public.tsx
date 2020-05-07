import React, { ReactElement } from 'react';

type Props = { children: ReactElement };

const PublicLayout = ({ children }: Props) => {
  return (
    <>
      <div className='public-layout'>
        <div className='content-box'>{children}</div>
      </div>
    </>
  );
};

export default PublicLayout;
