import React from 'react';
import { ColumnProps } from 'antd/es/table';
import { IBilling } from '../../interfaces/patient';
import { Table } from 'antd';

const columns: ColumnProps<IBilling>[] = [
  {
    key: 'billNo',
    title: 'Bill #',
    sorter: (a, b) => a.billNo - b.billNo,
    className: 'text-align-rigth',
    render: ({ billNo }) => <span className='text-right text-color-200'>{billNo}</span>
  },
  {
    key: 'patient',
    title: 'Patient',
    sorter: (a, b) => a.patient.localeCompare(b.patient),
    render: ({ patient }) => <span className='text-align-left'>{patient}</span>
  },
  {
    key: 'doctor',
    title: 'Doctor',
    sorter: (a, b) => a.doctor.localeCompare(b.doctor),
    render: ({ doctor }) => <span className='text-left'>{doctor}</span>
  },
  {
    key: 'billDate',
    title: 'Patient',
    sorter: (a, b) => a.billDate.localeCompare(b.billDate),
    render: ({ billDate }) => <span className='text-align-left text-color-200'>{billDate}</span>
  },
  {
    key: 'charges',
    title: 'Charges',
    render: ({ charges }) => charges
  },
  {
    key: 'tax',
    title: 'Tax',
    render: ({ tax }) => tax
  },
  {
    key: 'discount',
    title: 'Discount',
    render: ({ discount }) => discount
  },
  {
    key: 'total',
    title: 'Total',
    render: ({ total }) => <b>{total}</b>
  }
];

const BillingTable = ({ billings }) => {
  return (
    <Table
      className='accent-header'
      pagination={false}
      rowKey='billNo'
      dataSource={billings}
      columns={columns}
    />
  );
};

export default BillingTable;
