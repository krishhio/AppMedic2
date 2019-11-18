import React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { IPatient } from '../../interfaces/patient';

const columns: ColumnProps<IPatient>[] = [
  {
    key: 'photo',
    title: 'Photo',
    dataIndex: 'photo'
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name'
  },
  {
    key: 'id',
    dataIndex: 'id',
    title: 'ID'
  },
  {
    key: 'age',
    dataIndex: 'age',
    title: 'Age'
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
    title: 'Status'
  },
  {
    key: 'actions',
    dataIndex: 'actions',
    title: 'Actions'
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name'
  },

];

type Props = {
  patients: IPatient[];
};

const PatientsTable = ({ patients }: Props) => {
  return <Table dataSource={patients} columns={columns}/>;
};

export default PatientsTable;
