import React from 'react';

import { ColumnProps } from 'antd/es/table';
import { IAppointment } from '../../interfaces/patient';
import { Avatar, Table } from 'antd';

const columns: ColumnProps<IAppointment>[] = [
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
    sorter: (a, b) => (a.name > b.name ? 1 : -1),
    render: name => <strong>{name}</strong>
  },
  {
    key: 'email',
    dataIndex: 'email',
    title: 'Email',
    sorter: (a, b) => (a.email > b.email ? 1 : -1),
    render: email => (
      <span className='nowrap' style={{ color: '#336cfb' }}>
        <span className='icofont icofont-ui-email mr-1' style={{ fontSize: 16 }} />
        {email}
      </span>
    )
  },
  {
    key: 'data',
    dataIndex: 'date',
    title: 'Date',
    render: date => (
      <span className='nowrap' style={{ color: '#a5a5a5' }}>
        {date}
      </span>
    )
  },
  {
    key: 'visit',
    title: 'Last visit',
    render: appointment => (
      <span className='nowrap' style={{ color: '#a5a5a5' }}>
        {appointment.fromTo}
      </span>
    )
  },
  {
    key: 'number',
    dataIndex: 'number',
    title: 'Number',
    render: phone => (
      <span className='d-flex align-baseline nowrap' style={{ color: '#336cfb' }}>
        <span className='icofont icofont-ui-cell-phone mr-1' style={{ fontSize: 16 }} />
        {phone}
      </span>
    )
  },
  { key: 'doctor', title: 'Doctor', dataIndex: 'doctor' },
  { key: 'condition', title: 'Injury/Condition', dataIndex: 'injury' }
];

type Props = {
  data: IAppointment[];
};

const AppointmentsTable = ({ data }: Props) => (
  <Table rowKey='number' pagination={false} columns={columns} dataSource={data} />
);

export default AppointmentsTable;
