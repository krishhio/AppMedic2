import React, { useEffect, useState } from 'react';

import { Button, Modal } from 'antd';

import { IAppointment } from '../../interfaces/patient';
import { IPageData } from '../../interfaces/page-data';
import { PageProps } from '../../interfaces/page';

import PageAction from '../../layout/components/PageAction/PageAction';
import AppointmentForm from './AppointmentForm';
import AppointmentsTable from '../../layout/components/AppointmentsTable/AppointmentsTable';
import EditAppointment from './EditAppointment';

const pageData: IPageData = {
  title: 'Appointments',
  loaded: true,
  fullFilled: false,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'dashboard'
    },
    {
      title: 'Patients'
    }
  ]
};

const AppointmentsPage = ({ getData, setPageData }: PageProps) => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    getData('./data/appointments.json', setAppointments);
  }, []);

  useEffect(() => setPageData(pageData), []);

  const handleDelete = (appointment: IAppointment) => {};

  const handleEdit = (appointment: IAppointment) => {};

  const openAddingModal = () => {};

  const openEditModal = (appointment: IAppointment) => setSelectedAppointment(appointment);

  const closeModal = () => {
    setSelectedAppointment(null);
  };

  const addAppointment = (appointment: IAppointment) => setAppointments([...appointments, appointment]);

  const appointmentsActions = (appointment: IAppointment) => (
    <div className='buttons-list nowrap'>
      <Button onClick={openEditModal.bind({}, appointment)} shape='circle' type='primary'>
        <span className='icofont icofont-edit-alt' />
      </Button>
      <Button onClick={handleDelete.bind({}, appointment)} shape='circle' type='danger'>
        <span className='icofont icofont-ui-delete' />
      </Button>
    </div>
  );

  return (
    <>
      <AppointmentsTable data={appointments} actions={appointmentsActions} />

      <PageAction onClick={openAddingModal} icon='icofont-stethoscope-alt' type={'primary'} />

      

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
