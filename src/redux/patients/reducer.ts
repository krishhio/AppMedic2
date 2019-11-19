import { ADD_PATIENT, DELETE_PATIENT, EDIT_PATIENT, PatientsActions, SET_PATIENTS } from './types';
import { IPatient } from '../../interfaces/patient';

const initialState: IPatient[] = [];

// Reducer function
export function patientsReducer(state: IPatient[] = initialState, action: PatientsActions): IPatient[] {
  switch (action.type) {
    case SET_PATIENTS: {
      return [...action.payload];
    }

    case EDIT_PATIENT: {
      const editedPatients = state.map(el => (el.id !== action.payload.id ? el : action.payload));

      return [...editedPatients];
    }

    case ADD_PATIENT: {
      return [...state, action.payload];
    }

    case DELETE_PATIENT: {
      const patients = state.filter(el => el.id !== action.id);
      return [...patients];
    }

    default: {
      return state;
    }
  }
}
