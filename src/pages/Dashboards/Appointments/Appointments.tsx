import React, { useState } from 'react';

import { Button } from 'antd';

import PageAction from '../../../layout/components/PageAction/PageAction';
import EditAppointment from './EditAppointment';
import AddAppointment from './AddAppointment';

import AppointmentsTable from '../../../layout/components/AppointmentsTable/AppointmentsTable';
import { useFetchPageData, usePageData } from '../../../hooks/usePage';

import { IAppointment } from '../../../interfaces/patient';
import { IPageData } from '../../../interfaces/page';

const pageData: IPageData = {
  title: 'Appointments',
  fullFilled: false,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'default-dashboard',
    },
    {
      title: 'Appointments',
    },
  ],
};

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useFetchPageData<IAppointment[]>(
    './data/appointments.json',
    []
  );
  usePageData(pageData);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [addingModalVisibility, setAddingModalVisibility] = useState(false);

  const handleDelete = (appointment: IAppointment) => {
    const newAppointments = appointments.filter((el) => el !== appointment);
    setAppointments(newAppointments);
  };

  const handleEdit = (appointment: IAppointment) => {
    const editedAppointments = appointments.map((el) =>
      el !== selectedAppointment ? el : appointment
    );
    setAppointments(editedAppointments);
    setSelectedAppointment(null);
  };

  const openAddingModal = () => setAddingModalVisibility(true);

  const addAppointment = (appointment: IAppointment) => {
    setAppointments([...appointments, appointment]);
    setAddingModalVisibility(false);
  };

  const closeAddingModal = () => setAddingModalVisibility(false);

  const openEditModal = (appointment: IAppointment) => setSelectedAppointment(appointment);

  const closeModal = () => {
    setSelectedAppointment(null);
  };

  const appointmentsActions = (appointment: IAppointment) => (
    <div className='buttons-list nowrap'>
      <Button onClick={openEditModal.bind({}, appointment)} shape='circle' type='primary'>
        <span className='icofont icofont-edit-alt' />
      </Button>
      <Button onClick={handleDelete.bind({}, appointment)} shape='circle' danger>
        <span className='icofont icofont-ui-delete' />
      </Button>
    </div>
  );

  return (
    <>
      <AppointmentsTable data={appointments} actions={appointmentsActions} />

      <PageAction onClick={openAddingModal} icon='icofont-stethoscope-alt' type={'primary'} />

      <AddAppointment
        onClose={closeAddingModal}
        visible={addingModalVisibility}
        onSubmit={addAppointment}
      />

      <EditAppointment
        appointment={selectedAppointment}
        visible={!!selectedAppointment}
        onClose={closeModal}
        onEdited={handleEdit}
      />
    </>
  );
};

export default AppointmentsPage;
