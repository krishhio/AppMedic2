import React from 'react';
import { IRoute } from '../interfaces/routing';

import SettingsPage from '../pages/Settings/Settings';
import PatientsPage from '../pages/Patients/Patients';
import DashboardPage from '../pages/Dashboard/Dashboard';
import AppointmentsPage from '../pages/Appointments/Appointments';
import DoctorsPage from '../pages/Doctors/Doctors';

export const defaultRoutes: IRoute[] = [
  {
    path: 'settings',
    component: SettingsPage
  },
  {
    path: 'patients',
    component: PatientsPage
  },
  {
    path: 'default-dashboard',
    component: DashboardPage
  },
  {
    path: 'appointments',
    component: AppointmentsPage
  },
  {
    path: 'doctors',
    component: DoctorsPage
  }
];
