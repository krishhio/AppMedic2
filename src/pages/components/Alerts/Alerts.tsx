import React, { useEffect } from 'react';
import { IPageData } from '../../../interfaces/page-data';
import { PageProps } from '../../../interfaces/page';

const pageData: IPageData = {
  title: 'Alerts',
  loaded: true,
  fullFilled: true,
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
      title: 'Alerts'
    }
  ]
};

const AlertsPage = ({ setPageData }: PageProps) => {
  useEffect(() => setPageData(pageData), []);
  return <></>;
};

export default AlertsPage;
