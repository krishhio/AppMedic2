import { IRoute } from '../interfaces/routing';

import SettingsPage from '../pages/Settings/Settings';
import PatientsPage from '../pages/Dashboards/Patients/Patients';
import DashboardPage from '../pages/Dashboards/Dashboard/Dashboard';
import AppointmentsPage from '../pages/Dashboards/Appointments/Appointments';
import DoctorsPage from '../pages/Dashboards/Doctors/Doctors';
import AlertsPage from '../pages/components/Alerts/Alerts';

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
  },
  {
    path: 'alerts',
    component: AlertsPage
  }
];
