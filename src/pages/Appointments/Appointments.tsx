import React, { useEffect, useState } from 'react';

import { Button } from 'antd';

import { IAppointment } from '../../interfaces/patient';
import { IPageData } from '../../interfaces/page-data';
import { PageProps } from '../../interfaces/page';

import PageAction from '../../layout/components/PageAction/PageAction';
import AppointmentsTable from '../../layout/components/AppointmentsTable/AppointmentsTable';
import EditAppointment from './EditAppointment';
import AddAppointment from './AddAppointment';

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
      title: 'Appointments'
    }
  ]
};

const AppointmentsPage = ({ getData, setPageData }: PageProps) => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [addingModalVisibility, setAddingModalVisibility] = useState(false);

  useEffect(() => {
    getData('./data/appointments.json', setAppointments);
  }, []);

  useEffect(() => setPageData(pageData), []);

  const handleDelete = (appointment: IAppointment) => {
    const newAppointments = appointments.filter(el => el !== appointment);
    setAppointments(newAppointments);
  };

  const handleEdit = (appointment: IAppointment) => {
    const editedAppointments = appointments.map(el => (el !== selectedAppointment ? el : appointment));
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
      <Button onClick={handleDelete.bind({}, appointment)} shape='circle' type='danger'>
        <span className='icofont icofont-ui-delete' />
      </Button>
    </div>
  );

  return (
    <>
      <AppointmentsTable data={appointments} actions={appointmentsActions} />

      <PageAction onClick={openAddingModal} icon='icofont-stethoscope-alt' type={'primary'} />

      <AddAppointment onClose={closeAddingModal} visible={addingModalVisibility} onSubmit={addAppointment} />

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
