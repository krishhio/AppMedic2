import React, { useState } from 'react';
import { Dispatch } from 'redux';

import { Button, Modal } from 'antd';

import { IPatient } from '../../../interfaces/patient';
import PatientForm from './PatientForm';

import { addPatient } from '../../../redux/patients/actions';
import { connect } from 'react-redux';

type DispatchProps = {
  onAddPatient?: (patient: IPatient) => void;
};

const AddPatient = ({ onAddPatient }: DispatchProps) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  const closeModal = () => setVisible(false);

  const handleAddPatient = (patient: IPatient) => {
    onAddPatient(patient);
    closeModal();
  };

  return (
    <div className='add-patient'>
      <Button type='primary' onClick={handleClick}>
        <span className='icofont icofont-plus mr-2' style={{ fontSize: '1.3em' }} />
        Add patient
      </Button>
      <Modal
        visible={visible}
        footer={null}
        onCancel={closeModal}
        title={<h3 className='title'>Add patient</h3>}
      >
        <PatientForm onCancel={closeModal} onSubmit={handleAddPatient} />
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddPatient: (patient: IPatient) => dispatch(addPatient(patient))
});

export default connect(
  null,
  mapDispatchToProps
)(AddPatient);
