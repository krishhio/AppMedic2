import React from 'react';
import { IRoute } from '../interfaces/routing';

import SettingsPage from '../pages/Settings/Settings';

export const defaultRoutes: IRoute[] = [
  {
    path: 'settings',
    component: SettingsPage
  }
];
