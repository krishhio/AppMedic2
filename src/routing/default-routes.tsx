import { IRoute } from '../interfaces/routing';

import SettingsPage from '../pages/settings/Settings';
import PatientsPage from '../pages/Dashboards/Patients/Patients';
import DashboardPage from '../pages/Dashboards/Dashboard/Dashboard';
import AppointmentsPage from '../pages/Dashboards/Appointments/Appointments';
import DoctorsPage from '../pages/Dashboards/Doctors/Doctors';
import AlertsPage from '../pages/components/Alerts/AlertsPage';
import AutocompletePage from '../pages/components/Autocomplete/AutocompletePage';
import BadgesPage from '../pages/components/Badges/BadgesPage';
import ContactsPage from '../pages/components/Contacts/ContactsPage';
import InputsPage from '../pages/components/Inputs/InputsPage';
import RatingPage from '../pages/components/Ratings/Ratings';

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
  },
  {
    path: 'autocompletes',
    component: AutocompletePage
  },
  {
    path: 'badges',
    component: BadgesPage
  },
  {
    path: 'contacts',
    component: ContactsPage
  },
  {
    path: 'inputs',
    component: InputsPage
  },
  {
    path: 'ratings',
    component: RatingPage
  }
];
