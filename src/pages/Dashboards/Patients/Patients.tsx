import React from 'react';

import { usePageData } from '../../../hooks/usePage';
import { usePatients } from '../../../hooks/usePatients';

import PatientsTable from './PatientsTable';

import { IPageData } from '../../../interfaces/page';

const pageData: IPageData = {
  title: 'Patients',
  fullFilled: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'dashboard',
    },
    {
      title: 'Patients',
    },
  ],
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
    </>
  );
};

export default PatientsPage;
