import React, { useState } from 'react';

import BillingTable from '../../medic/billing-table';
import { useGetPayments } from '../../../hooks/useGetBillings';

import { IPageData } from '../../../interfaces/page';
import { usePageData } from '../../../hooks/usePage';
import PageAction from '../../../layout/components/PageAction/PageAction';
import { Button, Form, Input, Modal } from 'antd';
import { useFormik } from 'formik';

const pageData: IPageData = {
  title: 'Payments',
  fullFilled: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'dashboard'
    },
    {
      title: 'Payments'
    }
  ]
};

const Item = Form.Item;

const PaymentForm = ({ onSubmit, onClose }) => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {},
    onSubmit: (values) => onSubmit(values)
  });

  return (
    <>
      <Form layout='vertical'>
        <Item>
          <Input name='billNo' placeholder='Bill NO' onChange={handleChange} />
        </Item>

        <Item>
          <Input name='patient' placeholder='Patient' onChange={handleChange} />
        </Item>

        <Item>
          <Input name='doctor' placeholder='Doctor' onChange={handleChange} />
        </Item>

        <Item>
          <Input name='billDate' placeholder='Date' onChange={handleChange} />
        </Item>

        <Item>
          <Input name='charges' placeholder='Charges' onChange={handleChange} />
        </Item>

        <Item>
          <Input name='tax' placeholder='Tax' onChange={handleChange} />
        </Item>

        <Item>
          <Input name='discount' placeholder='Discount' onChange={handleChange} />
        </Item>

        <Item>
          <Input name='total' placeholder='Total' onChange={handleChange} />
        </Item>
      </Form>

      <div className='modal-footer d-flex justify-content-between mt-3'>
        <Button danger onClick={onClose}>
          Cancel
        </Button>

        <Button type='primary' onClick={() => handleSubmit()}>
          Add
        </Button>
      </div>
    </>
  );
};

const Payments = () => {
  const [visible, setVisibility] = useState<boolean>(false);
  const [billings, setBillings] = useGetPayments();
  usePageData(pageData);

  const handleSubmit = (payment) => {
    setBillings([...billings, payment]);
    setVisibility(false);
  };

  const handleClose = () => setVisibility(false);

  return (
    <>
      <BillingTable billings={billings} type='none' pagination={{ hideOnSinglePage: true }} />
      <PageAction onClick={() => setVisibility(true)} icon='icofont-plus' type='primary' />

      <Modal
        title={<h5 className='m-0'>Add Payment</h5>}
        onCancel={handleClose}
        visible={visible}
        footer={null}
      >
        <PaymentForm onSubmit={handleSubmit} onClose={handleClose} />
      </Modal>
    </>
  );
};

export default Payments;
