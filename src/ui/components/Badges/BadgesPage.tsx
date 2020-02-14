import React, { useEffect } from 'react';

import { Card, Tag } from 'antd';

import { IPageData, PageProps } from '../../../interfaces/page';

const pageData: IPageData = {
  fullFilled: true,
  title: 'Badges',
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
      title: 'Badges'
    }
  ]
};

const BadgesPage = ({ setPageData }: PageProps) => {
  useEffect(() => setPageData(pageData), [setPageData]);

  return (
    <div className='row'>
      <div className='col-md-6 col-sm-12'>
        <Card title='Style'>
          <div className='elem-list'>
            <Tag>Default</Tag>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BadgesPage;
