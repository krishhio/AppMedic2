import React from 'react';
import { IRoute } from '../interfaces/routing';

import SettingsPage from '../pages/Settings/Settings';
import PatientsPage from '../pages/Patients/Patients';
import DashboardPage from '../pages/Dashboard/Dashboard';

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
  }
];
