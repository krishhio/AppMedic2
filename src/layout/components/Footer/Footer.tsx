import React from 'react';

import Breadcrumbs from './Breadcrumbs';
import classNames from '../../../utils/classNames';
import { IBreadcrumb } from '../../../interfaces/page-data';

import './Footer.scss';

type Props = {
  loaded: boolean;
  boxed: boolean;
  layout: string;
  breadcrumbs: IBreadcrumb[];
  openModal: () => void;
};

const Footer = ({ boxed, loaded, layout, breadcrumbs }: Props) => {
  let footerClasses = classNames({
    footer: true,
    loaded: loaded,
    boxed: boxed
  });

  return (
    <div className={footerClasses}>
      <div className='footer-wrap'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-6 d-none d-md-block'>
            <Breadcrumbs layout={layout} breadcrumbs={breadcrumbs} />
          </div>

          <div className='col-12 col-md-6 text-right'>
            <div className='d-flex align-items-center justify-content-center justify-content-md-end'>
              <span>Version 1.3.0</span>
              <button className='no-style ml-2'>
                <i
                  className='icofont icofont-ui-settings'
                  style={{ fontSize: 26, color: '#336cfb' }}
                />
              </button>
            </div>
          </div>
        </div>

        <div className='footer-skeleton'>
          <div className='row align-items-center'>
            <div className='col-12 col-md-6 d-none d-md-block'>
              <ul className='page-breadcrumbs'>
                <li className='item bg-1 animated-bg' />
                <li className='item bg animated-bg' />
              </ul>
            </div>

            <div className='col-12 col-md-6'>
              <div className='info justify-content-center justify-content-md-end'>
                <div className='version bg animated-bg' />
                <div className='settings animated-bg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
