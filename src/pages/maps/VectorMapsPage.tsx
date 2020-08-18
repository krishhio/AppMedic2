import React from 'react';

import { VectorMap } from '@south-paw/react-vector-maps';

import { usePageData, useFetchPageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';

const pageData: IPageData = {
  title: 'Vector map',
  loaded: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'dashboard'
    },
    {
      title: 'UI Kit ',
      route: 'dashboard'
    },
    {
      title: 'Vector Maps'
    }
  ]
};

const mapUrl = './data/world-vector.json';

const PageVectorMaps = () => {
  usePageData(pageData);
  const [world] = useFetchPageData(mapUrl);

  if (!world) return <></>;
  console.log(world);
  return (
    <>
      <div className='full-height-page'>
        <VectorMap style={{ maxHeight: '100%' }} {...world} />
      </div>
    </>
  );
};

export default PageVectorMaps;
