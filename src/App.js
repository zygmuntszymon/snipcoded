import './App.css';
import Login from './Login';
import { useState } from 'react';
import { LoginContext } from './context/LoginContext'
import Header from './components/Header';
import AppBody from './components/AppBody';
import YourSnippets from './components/YourSnippets';

function App() {

  const [loggedIn, setLoggedIn] = useState(null);
  const [username, setUsername] = useState(null);
  const [photo, setPhoto] = useState(null);

  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn, username, setUsername,setPhoto,photo}}>
      {!loggedIn ? <Login/> : <>
      <Header /><AppBody /><YourSnippets /> </>
      }
  </LoginContext.Provider>
  );
}

export default App;
