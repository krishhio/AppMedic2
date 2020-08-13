import React from 'react';
import { IPageData } from '../../interfaces/page';
import { Button, Card } from 'antd';
import { IPricing } from '../../interfaces/pricing';
import { usePageData } from '../../hooks/usePage';
import { useGetPricing } from '../../hooks/useGetPricing';

const pageData: IPageData = {
  title: 'Pricing',
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
      title: 'Pricing'
    }
  ]
};

const PricingItem = ({ children, check = false }) => (
  <li className='d-flex align-items-center py-2 nowrap'>
    <span
      className={`mr-1 icofont-${check ? 'check' : 'close'}-circled`}
      style={{ color: '#8f8f90' }}
    />
    <span className='ml-1'>{children}</span>
  </li>
);

type PricingProps = {
  pricing: IPricing;
  type: 'primary' | 'default';
  accentColor?: string;
  className?: string;
};

const Pricing = ({ pricing, type = 'default', className }: PricingProps) => {
  const {
    accounts,
    diskSpace,
    freeSupport,
    monthlyBandwith,
    price,
    subdomainsLimit,
    title
  } = pricing;

  const accentColor = type === 'primary' ? '#336cfb' : '#000';

  return (
    <Card
      title={title}
      style={{ textAlign: 'center' }}
      className={`with-shadow ${className || ''}`}
    >
      <div className='d-flex justify-content-center align-items-center'>
        <div className='mr-2' style={{ fontSize: 50, color: accentColor }}>
          {price}
        </div>
        <div>
          <div style={{ fontSize: 20 }}>USD</div>
          <div>month</div>
        </div>
      </div>

      <hr className='my-4' />

      <ul className='list-unstyled text-left'>
        <PricingItem check>{diskSpace}GB Disk Space</PricingItem>

        <PricingItem check>{monthlyBandwith}GB Monthly Bandwith</PricingItem>

        <PricingItem check>{accounts} Email Accounts</PricingItem>

        <PricingItem check={subdomainsLimit}>Unlimited Subdomains</PricingItem>

        <PricingItem check={freeSupport}>Free support</PricingItem>
      </ul>

      <Button ghost={type === 'default'} type={type} className='mb-3' block>
        Purchase
      </Button>
    </Card>
  );
};

const PricingPage = () => {
  usePageData(pageData);
  const [personal, developers, premium] = useGetPricing();

  return (
    <>
      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <Pricing className='mb-md-0' pricing={personal} type='default' />
        </div>

        <div className='col-sm-12 col-md-4'>
          <Pricing className='mb-md-0' pricing={developers} type='primary' />
        </div>

        <div className='col-sm-12 col-md-4'>
          <Pricing className='mb-md-0 mb-0' pricing={premium} type='default' />
        </div>
      </div>
    </>
  );
};

export default PricingPage;
