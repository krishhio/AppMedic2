import React, { useState } from 'react';

import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

import { usePageData, useFetchPageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';

import { worldMapOptions } from './worldMapOptions';

const pageData: IPageData = {
  title: 'World map',
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
      title: 'World Map'
    }
  ]
};

const mapUrl = './data/world.json';

const WorldMapPage = () => {
  const [mapOptions, setMapOptions] = useState(null);

  useFetchPageData(mapUrl, null, setOptions);
  usePageData(pageData);

  function setOptions(geoJson: any) {
    echarts.registerMap('HK', geoJson);
    setMapOptions(worldMapOptions);
  }

  return (
    <div className='full-height-page'>
      {mapOptions ? (
        <ReactEcharts
          option={mapOptions}
          style={{ height: '100%', width: '100%' }}
          className='echarts-for-echarts'
        />
      ) : null}
    </div>
  );
};

export default WorldMapPage;
