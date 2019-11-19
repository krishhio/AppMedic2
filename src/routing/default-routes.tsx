import React from 'react';
import { IRoute } from '../interfaces/routing';

import SettingsPage from '../pages/Settings/Settings';
import PatientsPage from '../pages/Patients/Patients';

export const defaultRoutes: IRoute[] = [
  {
    path: 'settings',
    component: SettingsPage
  },
  {
    path: 'patients',
    component: PatientsPage
  }
];
