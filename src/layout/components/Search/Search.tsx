import React from 'react';

import { AutoComplete, Input } from 'antd';

import { SelectValue } from 'antd/es/select';
import { DataSourceItemType } from 'antd/es/auto-complete';

import { history } from '../../../redux/store';

import './Search.scss';

type Props = {
  data: DataSourceItemType[];
  layout: 'vertical' | 'horizontal';
};

const Search = ({ data, layout = 'vertical' }: Props) => {
  const handleSelect = (value: SelectValue) => {
    const route = `${layout}/${value}`;
    history.push(route);
  };

  return (
    <AutoComplete
      className='app-search'
      onSelect={handleSelect}
      dataSource={data}
      filterOption
    >
      <Input placeholder='Type to search' suffix={<span className='icofont icofont-search' />} />
    </AutoComplete>
  );
};

export default Search;
