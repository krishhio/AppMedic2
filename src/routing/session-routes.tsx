import { IRoute } from '../interfaces/routing';

import NotFound from '../pages/sessions/404';
import InternalError from '../pages/sessions/500';

export const sessionRoutes: IRoute[] = [
  {
    path: 'page-404',
    component: NotFound
  },
  {
    path: 'page-500',
    component: InternalError
  }
];
