import React from 'react';
import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';

const pageData: IPageData = {
  title: 'Invoice',
  fullFilled: true,
  breadcrumbs: [
    {
      title: 'Apps',
      route: 'default-dashboard'
    },
    {
      title: 'Service pages',
      route: 'default-dashboard'
    },
    {
      title: 'Invoices'
    }
  ]
};

const Invoice = () => {
  usePageData(pageData);

  return (
    <>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          
        </div>

        <div className='col-md-6 col-sm-12'></div>

        <div className='col-md-6 col-sm-12'></div>

        <div className='col-md-6 col-sm-12'></div>
      </div>
    </>
  );
};

export default Invoice;
