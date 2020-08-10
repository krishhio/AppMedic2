import React from 'react';

import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';

const pageData: IPageData = {
  title: 'Departments',
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

const Invoices = () => {
  usePageData(pageData);

  return <>

  </>;
};

export default Invoices;
