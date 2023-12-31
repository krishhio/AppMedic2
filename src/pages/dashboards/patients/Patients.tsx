import React from 'react';

import { usePageData } from '../../../hooks/usePage';
import { usePatients } from '../../../hooks/usePatients';

import PatientsTable from './PatientsTable';

import { IPageData } from '../../../interfaces/page';
import AddPatient from '../../../layout/components/patients/AddPatient';

const pageData: IPageData = {
  title: 'Patients',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Medicine',
      route: 'default-dashboard'
    },
    {
      title: 'Patients'
    }
  ]
};

const PatientsPage = () => {
  const { patients, editPatient, deletePatient } = usePatients();
  usePageData(pageData);

  return (
    <>
      <PatientsTable
        onDeletePatient={deletePatient}
        onEditPatient={editPatient}
        patients={patients}
      />
      <AddPatient/>
    </>
  );
};

export default PatientsPage;
