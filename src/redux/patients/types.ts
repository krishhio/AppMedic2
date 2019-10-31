import { IPatient } from '../../interfaces/patient';

export const SET_PATIENT = '[Patients] Set';
export const ADD_PATIENT = '[Patients] Add';
export const EDIT_PATIENT = '[Patients] Edit';
export const DELETE_PATIENT = '[Patients] Delete';
export const OPEN_MODAL_PATIENTS = '[Patients] Open modal';
export const CLOSE_MODAL_PATIENTS = '[Patients] Close modal';

export interface SetPatientAction {
  type: typeof SET_PATIENT;
  payload: IPatient[];
}

export interface AddPatientAction {
  type: typeof ADD_PATIENT;
  payload: IPatient;
}

export interface EditPatientAction {
  type: typeof EDIT_PATIENT;
  payload: IPatient;
}

export interface DeletePatientAction {
  type: typeof DELETE_PATIENT;
  id: string;
}

export interface OpenModalAction {
  type: typeof OPEN_MODAL_PATIENTS;
}

export interface CloseModalAction {
  type: typeof CLOSE_MODAL_PATIENTS;
}

export type PatientsActions =
  | SetPatientAction
  | AddPatientAction
  | DeletePatientAction
  | EditPatientAction
  | CloseModalAction
  | OpenModalAction;
