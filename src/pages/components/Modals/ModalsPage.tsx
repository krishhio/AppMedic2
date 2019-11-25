import React from 'react';

import { IPageData, PageProps } from '../../../interfaces/page';

const pageData: IPageData = {
  fullFilled: true,
  title: 'Modals',
  breadcrumbs: [
    {
      title: 'UI Kit',
      route: 'dashboard'
    },
    {
      title: 'Components',
      route: 'dashboard'
    },
    {
      title: 'Modals'
    }
  ]
};

const ModalsPage = ({ setPageData }: PageProps) => {
  return <></>;
};
