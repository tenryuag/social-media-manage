import React from 'react';
import Header from './components/layout/Header';
import LoginButton from './components/LoginButton';

function App() {
  return (
    <div className='container-fluid'>
      <Header>

      </Header>
      <div className='row' style={{padding: '24px 16px'}}>
        <LoginButton />
      </div>
    </div>
  );
}

export default App;
