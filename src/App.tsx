import React from 'react';

import VerticalLayout from './layout/Vertical/Vertical';

import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import HorizontalLayout from './layout/Horizontal/Horizontal';
import { Button } from 'antd';

import { defaultRoutes } from './routing';
import Page from './layout/components/Page/Page';

const DefaultRoutes = ({ layout }) => (
  <Switch>
    {defaultRoutes.map((route, index) => (
      <Route
        key={index}
        path={`/${layout}/${route.path}`}
        exact={route.exact}
        component={() => (
          <Page>
            <route.component />
          </Page>
        )}
      />
    ))}
  </Switch>
);

const App: React.FC = () => {
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
