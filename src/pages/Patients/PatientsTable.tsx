import React from 'react';
import { Avatar, Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { IPatient } from '../../interfaces/patient';

const columns: ColumnProps<IPatient>[] = [
  {
    key: 'img',
    title: 'Photo',
    dataIndex: 'img',
    render: img => {
      return <Avatar size={40} src={`${window.location.origin}/${img}`} />;
    }
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
    sorter: (a, b) => (a.name > b.name ? 1 : -1)
  },
  {
    key: 'id',
    dataIndex: 'id',
    title: 'ID',
    sorter: (a, b) => (a.id > b.id ? 1 : -1)
  },
  {
    key: 'age',
    dataIndex: 'age',
    title: 'Age',
    sorter: (a, b) => a.age - b.age
  },
  {
    key: 'address',
    dataIndex: 'address',
    title: 'Address'
  },
  {
    key: 'number',
    dataIndex: 'number',
    title: 'Number'
  },
  {
    key: 'visit',
    dataIndex: 'visit',
    title: 'Last visit'
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Status',
    sorter: (a, b) => (a.status > b.status ? 1 : -1)
  },
  {
    key: 'actions',
    dataIndex: 'actions',
    title: 'Actions'
  }
];

type Props = {
  patients: IPatient[];
};

const PatientsTable = ({ patients }: Props) => <Table className='accent-header' rowKey='id' dataSource={patients} columns={columns} />;

export default PatientsTable;
