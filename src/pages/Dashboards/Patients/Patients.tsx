import React, { useEffect } from 'react';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IPatient } from '../../../interfaces/patient';
import { IAppState } from '../../../interfaces/app-state';
import { IPageData, PageProps } from '../../../interfaces/page';

import PatientsTable from './PatientsTable';
import { editPatient, deletePatient } from '../../../redux/patients/actions';

const pageData: IPageData = {
  title: 'Patients',
  fullFilled: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'dashboard'
    },
    {
      title: 'Patients'
    }
  ]
};

type DispatchProps = {
  editPatient: (patient: IPatient) => void;
  deletePatient: (id: string) => void;
};

type StateProps = {
  patients: IPatient[];
};

type Props = PageProps & DispatchProps & StateProps;

const PatientsPage = ({ setPageData, patients, deletePatient, editPatient }: Props) => {
  useEffect(() => setPageData(pageData), []);

  return (
    <>
      <PatientsTable onDeletePatient={deletePatient} onEditPatient={editPatient} patients={patients} />
    </>
  );
};

const mapStateToProps = (state: IAppState) => ({
  patients: state.patients
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  editPatient: (patient: IPatient) => dispatch(editPatient(patient)),
  deletePatient: (id: string) => dispatch(deletePatient(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientsPage);
