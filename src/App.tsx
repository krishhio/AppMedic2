import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import VerticalLayout from './layout/Vertical/Vertical';
import HorizontalLayout from './layout/Horizontal/Horizontal';

import { defaultRoutes } from './routing';

import './App.scss';
import { sessionRoutes } from './routing/session-routes';
import NotFound from './pages/sessions/404';

const RoutesSwitch = ({ routes, layout }) => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        exact={route.exact}
        path={`/${layout}/${route.path}`}
        component={() => <route.component />}
      />
    ))}

    <Route path='*'>
      <NotFound />
    </Route>
  </Switch>
);

const DefaultRoutes = ({ layout }) => <RoutesSwitch routes={defaultRoutes} layout={layout} />;

const SessionRoutes = () => {
  console.log(sessionRoutes);
  return <RoutesSwitch routes={sessionRoutes} layout='public' />;
};

const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/vertical/default-dashboard' />
      </Route>

      <Route path='/public'>
        <SessionRoutes />
      </Route>

      <Route path='/horizontal'>
        <HorizontalLayout>
          <DefaultRoutes layout='horizontal' />
        </HorizontalLayout>
      </Route>

      <Route path='/vertical'>
        <VerticalLayout>
          <DefaultRoutes layout='vertical' />
        </VerticalLayout>
      </Route>

      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
