import React from 'react';

import VerticalLayout from './layout/Vertical/Vertical';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className='App'>
      <VerticalLayout>
        <div>Some layout content</div>
      </VerticalLayout>
    </div>
  );
};

export default App;
