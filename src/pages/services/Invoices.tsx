import React from 'react';

import { Card } from 'antd';

import InvoicesTable from './InvoicesTable';

import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';
import { useGetInvoices } from '../../hooks/useGetInvoices';

const pageData: IPageData = {
  title: 'Invoices',
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

const InfoSection = () => (
  <p className='color-gray text-base mb-4'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorem excepturi facilis magni
    necessitatibus perspiciatis repellendus sunt veniam? A ad architecto aspernatur cupiditate
    dignissimos distinctio earum, eligendi eum iusto laboriosam maxime minima necessitatibus nemo
    nesciunt odio perferendis, quaerat qui quo repellendus sapiente.
  </p>
);

const SummaryCard = () => (
  <Card className='bg-color-black'>
    <div className='d-md-flex flex-wrap justify-content-between align-items-center d-sm-block'>
      <div className='text-center px-4 py-2'>
        <h5 className='color-white m-0 text-base'>Amount received</h5>
        <h4 className='text-bold color-green m-0'>$35,570</h4>
      </div>

      <div className='text-center px-4 py-2'>
        <h5 className='color-white m-0 text-base'>Amount pending</h5>
        <h4 className='text-bold color-red m-0'>$2,540</h4>
      </div>
    </div>
  </Card>
);

const Invoices = () => {
  const invoices = useGetInvoices();
  usePageData(pageData);

  return (
    <>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <InfoSection />
        </div>

        <div className='col-md-6 col-sm-12'>
          <SummaryCard />
        </div>
      </div>

      <InvoicesTable invoices={invoices} />
    </>
  );
};

export default Invoices;
