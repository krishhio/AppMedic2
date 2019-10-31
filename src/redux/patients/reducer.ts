import {
  ADD_PATIENT,
  CLOSE_MODAL_PATIENTS,
  DELETE_PATIENT,
  EDIT_PATIENT,
  OPEN_MODAL_PATIENTS,
  PatientsActions,
  SET_PATIENT
} from './types';

import { IPatientsState } from '../../interfaces/patient';

const initialState: IPatientsState = {
  patients: [],
  modalOpened: false
};

// Reducer function
export function patientsReducer(
  state: IPatientsState = initialState,
  action: PatientsActions
): IPatientsState {
  switch (action.type) {
    case SET_PATIENT: {
      return { ...state, patients: [...action.payload] };
    }
    case EDIT_PATIENT: {
      const editedPatients = state.patients.map(el =>
        el.id !== action.payload.id ? el : action.payload
      );

      return { ...state, patients: editedPatients };
    }
    case ADD_PATIENT: {
      return { ...state, patients: [...state.patients, action.payload] };
    }
    case DELETE_PATIENT: {
      const patients = [...state.patients].filter(el => el.id !== action.id);
      return { ...state, patients: patients };
    }
    case OPEN_MODAL_PATIENTS: {
      return { ...state, modalOpened: true };
    }
    case CLOSE_MODAL_PATIENTS: {
      return { ...state, modalOpened: false };
    }
    default: {
      return state;
    }
  }
}
