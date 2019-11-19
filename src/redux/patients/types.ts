import { IPatient } from '../../interfaces/patient';

export const SET_PATIENTS = '[Patients] Set';
export const ADD_PATIENT = '[Patients] Add';
export const EDIT_PATIENT = '[Patients] Edit';
export const DELETE_PATIENT = '[Patients] Delete';

export interface SetPatientAction {
  type: typeof SET_PATIENTS;
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


export type PatientsActions =
  | SetPatientAction
  | AddPatientAction
  | DeletePatientAction
  | EditPatientAction;
