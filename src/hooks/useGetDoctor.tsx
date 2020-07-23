import { useEffect, useState } from 'react';

import { IUser } from '../interfaces/user';
import axios from 'axios';

const EMPTY_DOCTOR: IUser = {
  img: 'content/doctor-400-1.jpg',
  name: 'Not Found',
  role: '',
  address: '',
  profileLink: '',
  social: []
};

async function getDoctors() {
  const result = await axios.get('./data/doctors.json');
  return result.data as IUser[];
}

export function useGetDoctors(): IUser[] {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then((data) => {
      setDoctors(data);
    });
  }, []);

  return doctors;
}

export function useGetDoctor(name: string): IUser {
  const [doctor, setDoctor] = useState(EMPTY_DOCTOR);
  const doctors = useGetDoctors();

  useEffect(() => {
    const newDoctor = doctors.find((doc) => doc.name === name);

    if (newDoctor === undefined) return;

    setDoctor(newDoctor);
  }, [name]);

  return doctor;
}
