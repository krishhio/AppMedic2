import React from 'react';
import { IAppointment } from '../../interfaces/patient';
import AppointmentForm from './AppointmentForm';
import { Modal } from 'antd';

type Props = {
  onSubmit: (IAppointment) => void;
  visible: boolean;
  onClose: () => void;
};

const AddAppointment = ({ visible, onClose, onSubmit }: Props) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      title={<h3 className='title'>Add appointment</h3>}
    >
      <AppointmentForm onCancel={onClose} onSubmit={onSubmit} submitText='Add appointment' />
    </Modal>
  );
};

export default AddAppointment;
