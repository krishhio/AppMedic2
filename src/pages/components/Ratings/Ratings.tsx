import React, { useEffect } from 'react';

import { IPageData, PageProps } from '../../../interfaces/page';
import { Card, Icon, Rate } from 'antd';

const pageData: IPageData = {
  fullFilled: true,
  title: 'Ratings',
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
      title: 'Rating'
    }
  ]
};

const RatingPage = ({ setPageData }: PageProps) => {
  useEffect(() => setPageData(pageData), []);

  return (
    <div className='row'>
      <div className='col-md-6 col-sm-12'>
        <Card title='Default'>
          <Rate />
        </Card>
      </div>

      <div className='col-md-6 col-sm-12'>
        <Card title='With current value'>
          <Rate defaultValue={3} />
        </Card>
      </div>

      <div className='col-md-6 col-sm-12'>
        <Card title='Disabled'>
          <Rate disabled />
        </Card>
      </div>

      <div className='col-md-6 col-sm-12'>
        <Card title='Half star'>
          <Rate allowHalf />
        </Card>
      </div>

      <div className='col-md-6 col-sm-12'>
        <Card title='Custom items count' className='mb-md-0'>
          <div className='elem-list d-flex flex-column'>
            <Rate count={3} />
            <Rate count={6} />
            <Rate count={9} />
          </div>
        </Card>
      </div>

      <div className='col-md-6 col-sm-12'>
        <Card title='Custom items icons' className='mb-0'>
          <div className='elem-list d-flex flex-column'>
            <Rate character={<Icon type='like' />} />
            <Rate character={<Icon type='check' />} />
            <Rate character={<Icon type='bulb' />} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RatingPage;
