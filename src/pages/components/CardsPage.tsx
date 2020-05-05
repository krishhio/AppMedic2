import React from 'react';

import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';
import { Card } from 'antd';

const pageData: IPageData = {
  title: 'Cards',
  loaded: true,
  breadcrumbs: [
    {
      title: 'UI Kit',
      route: 'default-dashboard'
    },
    {
      title: 'Components',
      route: 'default-dashboard'
    },
    {
      title: 'Cards'
    }
  ]
};

const CardsPage = () => {
  usePageData(pageData);

  return (
    <>
      <h4 className='section-title'>Simple cards</h4>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card title='With title'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo
            nihil non omnis temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dicta, provident?
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo
              nihil non omnis temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dicta, provident?
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, reprehenderit.</p>
          </Card>
        </div>
      </div>

      <h4 className='section-title'>Colored cards</h4>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card className='bg-color-500' title='Accent'>
            <p className='text-contrast-500'>
              Standard card. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
              dolore enim, nemo nihil non omnis temporibus? Blanditiis culpa labore velit.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
            </p>
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card className='bg-color-info' title='Info'>
            <p className='text-contrast-500'>
              Standard card. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
              dolore enim, nemo nihil non omnis temporibus? Blanditiis culpa labore velit.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
            </p>
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card className='bg-color-success' title='Success'>
            <p className='text-contrast-500'>
              Standard card. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
              dolore enim, nemo nihil non omnis temporibus? Blanditiis culpa labore velit.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
            </p>
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card className='bg-color-warning' title='Warning'>
            <p className='text-contrast-500'>
              Standard card. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
              dolore enim, nemo nihil non omnis temporibus? Blanditiis culpa labore velit.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
            </p>
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card className='bg-color-error' title='Error'>
            <p className='text-contrast-500'>
              Standard card. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
              dolore enim, nemo nihil non omnis temporibus? Blanditiis culpa labore velit.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
            </p>
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card className='bg-color-orange' title='Custom'>
            <p className='text-contrast-500'>
              Standard card. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
              dolore enim, nemo nihil non omnis temporibus? Blanditiis culpa labore velit.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
            </p>
          </Card>
        </div>
      </div>

      <h4 className='section-title'>Outlined</h4>
    </>
  );
};

export default CardsPage;
