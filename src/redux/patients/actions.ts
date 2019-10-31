import {
  ADD_PATIENT,
  AddPatientAction,
  CLOSE_MODAL_PATIENTS,
  CloseModalAction,
  DELETE_PATIENT,
  DeletePatientAction,
  EDIT_PATIENT,
  EditPatientAction,
  OPEN_MODAL_PATIENTS,
  OpenModalAction
} from './types';

import { IPatient } from '../../interfaces/patient';

export const addPatient = (patient: IPatient): AddPatientAction => ({
  type: ADD_PATIENT,
  payload: patient
});

export const deletePatient = (id: string): DeletePatientAction => ({
  type: DELETE_PATIENT,
  id
});

export const editPatient = (patient: IPatient): EditPatientAction => ({
  type: EDIT_PATIENT,
  payload: patient
});

export const openPatientsModal = (): OpenModalAction => ({
  type: OPEN_MODAL_PATIENTS
});

export const setPatient = (): CloseModalAction => ({
  type: CLOSE_MODAL_PATIENTS
});


