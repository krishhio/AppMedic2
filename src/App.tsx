import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import VerticalLayout from './layout/Vertical/Vertical';
import HorizontalLayout from './layout/Horizontal/Horizontal';

import { defaultRoutes } from './routing';

import './App.scss';
import { sessionRoutes } from './routing/error-routes';

const RoutesSwitch = ({ routes, layout }) => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={`/${layout}/${route.path}`}
        exact={route.exact}
        component={() => <route.component />}
      />
    ))}
  </Switch>
);

const DefaultRoutes = ({ layout }) => <RoutesSwitch routes={defaultRoutes} layout={layout} />;

const SessionRoutes = () => <RoutesSwitch routes={sessionRoutes} layout='public' />;

const App = () => {
  return (
    <Switch>
      <Route path='/horizontal'>
        <HorizontalLayout>
          <DefaultRoutes layout='horizontal' />
        </HorizontalLayout>
      </Route>

      <Route path={['/vertical']}>
        <VerticalLayout>
          <DefaultRoutes layout='vertical' />
        </VerticalLayout>
      </Route>

      <Route path={['/pubic']}>
        <SessionRoutes />
      </Route>

      <Route path='/'>
        <Redirect to='/vertical/default-dashboard' />
      </Route>

      <Route path='*'>
        <VerticalLayout>
          <div>Error content</div>
        </VerticalLayout>
      </Route>
    </Switch>
  );
};

export default App;
