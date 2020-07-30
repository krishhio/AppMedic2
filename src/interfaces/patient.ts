export interface IPatient {
  id?: string;
  img?: string | ArrayBuffer;
  profileImg?: string | ArrayBuffer;
  name: string;
  fullName?: 'string'
  number: string;
  phone?: string;
  age: number;
  gender: string;
  address: string;
  status?: string;
  lastVisit?: string;
}

export interface IAppointment {
  img: string;
  name: string;
  email: string;
  number: string;
  date: string;
  fromTo: string;
  doctor: string;
  injury: string;
}
