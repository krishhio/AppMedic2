import React from 'react';
import { Card } from 'antd';

import CollSpan from './tables/CollSpan';
import TableSize from './tables/TableSize';
import Selection from './tables/Selection';
import Operations from './tables/Operations';
import NestedTable from './tables/NestedTable';
import FilterReset from './tables/FilterReset';
import CustomOptions from './tables/CustomOptions';
import FilterAndSorting from './tables/FilterAndSorting';

import { IPageData } from '../../interfaces/page';
import { usePageData } from '../../hooks/usePage';

const pageData: IPageData = {
  title: 'Tables',
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
      title: 'Tables'
    }
  ]
};

const TablesPage = () => {
  usePageData(pageData);

  return (
    <>
      <Card title='With selection'>
        <Selection />
      </Card>

      <Card title='With selection and operations'>
        <Operations />
      </Card>

      <Card title='With filters and sorting'>
        <FilterAndSorting />
      </Card>

      <Card title='With filters and sorting reset'>
        <FilterReset />
      </Card>

      <Card title='Table sizes'>
        <TableSize />
      </Card>

      <Card title='Bordered with header and footer'>
        <CustomOptions />
      </Card>

      <Card title='With colSpan and rowSpan'>
        <CollSpan />
      </Card>

      <Card title='With nested tables' className='mb-0'>
        <NestedTable />
      </Card>
    </>
  );
};

export default TablesPage;
