export interface IPatient {
  id?: string;
  img: string | ArrayBuffer;
  name: string;
  number: string;
  age: number | string;
  gender: string;
  address: string;
  status?: string;
  lastVisit?: string;
}

export interface IPatientsState {
  patients: IPatient[],
  modalOpened: boolean
}
