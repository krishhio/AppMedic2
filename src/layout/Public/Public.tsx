import React, { ReactNode } from 'react';
import './Public.scss';
import Logo from '../components/Logo/Logo';
import LogoSvg from '../../assets/img/logo.svg';

type Props = { children: ReactNode; bgImg?: string };

const PublicLayout = ({ children, bgImg }: Props) => (
  <div className='public-layout' style={{ backgroundImage: `url(${bgImg})` }}>
    <div className='content-box'>
      <div className='content-header'>
        <Logo src={LogoSvg} />
      </div>
      <div className='content-body'>{children}</div>
    </div>
  </div>
);

export default PublicLayout;
