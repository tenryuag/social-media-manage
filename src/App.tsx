import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import LoginButton from './components/LoginButton';
import Post from './components/Post';
import * as storage from './utils/storage';
import UserLogued from './components/UserLogued';

function App() {
  const [user, setUser] = useState(null);
  const onLogin = (user) => {
    //almacenar la sesion del usuario en la app (LocalStorage)
    storage.setUser(user);
    setUser(user);
  };

  const onLogout = () => {
    storage.clear();
    setUser(null);
  };

  useEffect(() => {
    const checkSession = () => {
      const user = storage.getUser(); //obtener la sesion del usuario del storage
      if (user) {
        setUser(user);
      }
    };
    checkSession();
  }, []);

  return (
    <div className='container-fluid'>
      <Header>
        {user && <UserLogued user={user} onLogout={onLogout} />}
      </Header>
      <div className='row' style={{padding: '24px 16px'}}>
        {!user && <LoginButton onLogin={onLogin}/>}
        {user && <Post />}
      </div>
    </div>
  );
}

export default App;
