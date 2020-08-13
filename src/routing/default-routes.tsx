import { IRoute } from '../interfaces/routing';

import SettingsPage from '../pages/settings/Settings';

import PatientsPage from '../pages/Dashboards/Patients/Patients';
import DashboardPage from '../pages/Dashboards/Dashboard/Dashboard';
import AppointmentsPage from '../pages/Dashboards/Appointments/Appointments';
import DoctorsPage from '../pages/Dashboards/Doctors/Doctors';
import AlertsPage from '../pages/components/AlertsPage';
import AutocompletePage from '../pages/components/AutocompletePage';
import BadgesPage from '../pages/components/BadgesPage';
import ContactsPage from '../pages/components/ContactsPage';
import InputsPage from '../pages/components/InputsPage';
import RatingPage from '../pages/components/RatingsPage';
import ModalsPage from '../pages/components/ModalsPage';
import SelectsPage from '../pages/components/SelectsPage';
import SwitchersPage from '../pages/components/SwitchersPage';
import CheckboxesPage from '../pages/components/CheckboxesPage';
import RadiosPage from '../pages/components/RadiosPage';
import TimelinePage from '../pages/components/TimlinesPage';
import CardsPage from '../pages/components/CardsPage';
import ButtonsPage from '../pages/components/ButtonsPage';
import TextareasPage from '../pages/components/TextAreaPage';
import DoctorProfilePage from '../pages/medic/DoctorsProfilePage';
import PatientProfilePage from '../pages/medic/PatientProfilePage';
import Payments from '../pages/Dashboards/Payments/Payments';
import Departments from '../pages/medic/Departments';
import InvoicesPage from '../pages/services/InvoicesPage';
import InvoicePage from '../pages/services/InvoicePage';

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
    path: 'doctor-profile',
    component: DoctorProfilePage
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
  },
  {
    path: 'modal-windows',
    component: ModalsPage
  },
  {
    path: 'selects',
    component: SelectsPage
  },
  {
    path: 'switchers',
    component: SwitchersPage
  },
  {
    path: 'checkboxes',
    component: CheckboxesPage
  },
  {
    path: 'radio-buttons',
    component: RadiosPage
  },
  {
    path: 'v-timeline',
    component: TimelinePage
  },
  {
    path: 'cards',
    component: CardsPage
  },
  {
    path: 'buttons',
    component: ButtonsPage
  },
  {
    path: 'textareas',
    component: TextareasPage
  },
  {
    path: 'patient-profile',
    component: PatientProfilePage
  },
  {
    path: 'payments',
    component: Payments
  },
  {
    path: 'departments',
    component: Departments
  },
  {
    path: 'invoices',
    component: InvoicesPage
  },
  {
    path: 'invoice',
    component: InvoicePage
  }
];
