import React from 'react';

import { IPageData } from '../../../interfaces/page';
import { usePageData } from '../../../hooks/usePage';

const pageData: IPageData = {
  fullFilled: true,
  title: 'Modals',
  breadcrumbs: [
    {
      title: 'UI Kit',
      route: 'dashboard',
    },
    {
      title: 'Components',
      route: 'dashboard',
    },
    {
      title: 'Modals',
    },
  ],
};

const ModalsPage = () => {
  usePageData(pageData);
  return <></>;
};

export default ModalsPage;
