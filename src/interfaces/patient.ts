export interface IPatient {
  id: string;
  img: string | ArrayBuffer;
  name: string;
  number: string;
  age: number;
  gender: string;
  address: string;
  status: string;
  lastVisit: string;
}

export interface IPatientsState {
  patients: IPatient[],
  modalOpened: boolean
}
