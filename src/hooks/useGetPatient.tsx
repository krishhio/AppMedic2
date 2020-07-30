import { useEffect, useState } from 'react';

import { IPatient } from '../interfaces/patient';
import axios from 'axios';

const EMPTY_PATIENT: Partial<IPatient> = {
  img: 'content/doctor-400-1.jpg'
};

async function getPatients() {
  const result = await axios.get('./data/patients.json');
  return result.data as IPatient[];
}

export function useGetPatients(): IPatient[] {
  const [doctors, setPatients] = useState([]);

  useEffect(() => {
    getPatients().then((data) => {
      setPatients(data);
    });
  }, []);

  return doctors;
}

export function useGetPatient(name: string) {
  const [patient, setPatient] = useState<IPatient>(null);
  const patients = useGetPatients();

  useEffect(() => {
    if (patients.length === 0) return;

    const newPatient = patients.find((doc) => doc.name === name);

    if (newPatient === undefined) return;

    setPatient(newPatient);
  }, [name, patients]);

  return { patient };
}
