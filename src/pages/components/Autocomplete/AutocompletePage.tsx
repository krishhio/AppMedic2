import React, { useEffect, useState } from 'react';

import { AutoComplete, Card, Input } from 'antd';
import { BookOutlined, EditOutlined, FileTextOutlined, FontSizeOutlined } from '@ant-design/icons';

import { IPageData, PageProps } from '../../../interfaces/page';

const pageData: IPageData = {
  title: 'Autocompletes',
  breadcrumbs: [
    {
      title: 'UI Kit',
      route: 'dashboard',
    },
    {
      title: 'Components',
      route: 'dashboard',
    },
    {
      title: 'Autocompletes',
    },
  ],
};

const AutocompletePage = ({ setPageData, getData }: PageProps) => {
  const [dataSource, setDataSource] = useState([]);

  const [firstLimit, setFirstLimit] = useState(10);
  const [secondLimit, setSecondLimit] = useState(20);
  const [thirdLimit, setThirdLimit] = useState(30);

  useEffect(() => setPageData(pageData), [setPageData]);
  useEffect(() => {
    getData('./data/autocomplete.json', setDataSource);
  }, []);

  const handleChange = (maxCount: number, setter) => (value: string) => {
    setter(maxCount - value.length);
  };

  return (
    <div className='row'>
      <div className='col-md-6 col-sm-12'>
        <Card title='Basic'>
          <div className='elem-list'>
            <AutoComplete filterOption options={dataSource} value={'USA'} />
            <AutoComplete filterOption options={dataSource} placeholder='With placeholder' />
          </div>
        </Card>

        <Card title='Input sizes' className='mb-md-0'>
          <div className='elem-list'>
            <AutoComplete
              options={dataSource}
              filterOption
              placeholder='Small input'
              className='custom'
              size='small'
            />

            <AutoComplete
              filterOption
              options={dataSource}
              placeholder='Default input'
              className='custom'
            />

            <AutoComplete
              options={dataSource}
              filterOption
              placeholder='Large input'
              className='custom'
              size='large'
            />
          </div>
        </Card>
      </div>

      <div className='col-md-6 col-sm-12'>
        <Card title='With icons'>
          <div className='elem-list'>
            <AutoComplete options={dataSource} filterOption>
              <Input placeholder='Prefix icon' className='custom' prefix={<BookOutlined />} />
            </AutoComplete>

            <AutoComplete options={dataSource} filterOption>
              <Input placeholder='Suffix icon' className='custom' suffix={<EditOutlined />} />
            </AutoComplete>
          </div>
        </Card>

        <Card title='Char limiting' className='mb-0'>
          <div className='elem-list'>
            <AutoComplete
              options={dataSource}
              filterOption
              onSearch={handleChange(10, setFirstLimit)}
            >
              <Input
                placeholder='10 char limit'
                maxLength={10}
                prefix={<FontSizeOutlined />}
                suffix={<span style={{ color: 'rgba(0,0,0,.2)' }}>{firstLimit || 0}</span>}
              />
            </AutoComplete>

            <AutoComplete
              options={dataSource}
              filterOption
              onSearch={handleChange(20, setSecondLimit)}
            >
              <Input
                placeholder='20 char limit'
                maxLength={20}
                prefix={<FileTextOutlined />}
                suffix={<span style={{ color: 'rgba(0,0,0,.2)' }}>{secondLimit || 0}</span>}
              />
            </AutoComplete>

            <AutoComplete
              options={dataSource}
              filterOption
              onSearch={handleChange(10, setThirdLimit)}
            >
              <Input
                placeholder='30 char limit'
                maxLength={30}
                prefix={<EditOutlined />}
                suffix={<span style={{ color: 'rgba(0,0,0,.2)' }}>{thirdLimit || 0}</span>}
              />
            </AutoComplete>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AutocompletePage;
