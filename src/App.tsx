import React, { useEffect } from 'react';

import VerticalLayout from './layout/Vertical/Vertical';

import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HorizontalLayout from './layout/Horizontal/Horizontal';
import { Button } from 'antd';

type LogProps = {
  title?: string;
};

const LogProps = (props) => {
  useEffect(() => console.log(props), [props]);
  return (
    <>
      <Button>Btn</Button>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={['/vertical']}>
        <VerticalLayout>
          <LogProps />
        </VerticalLayout>
      </Route>

      <Route path='/horizontal'>
        <HorizontalLayout>
          <div>Horizontal layout</div>
        </HorizontalLayout>
      </Route>

      <Route path='*'>
        <HorizontalLayout>
          <div>Error content</div>
        </HorizontalLayout>
      </Route>
    </Switch>
  );
};

export default App;
