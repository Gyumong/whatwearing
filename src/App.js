import React,{useState} from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Loading from './components/Loading';
import {Route,Link,Switch} from 'react-router-dom';

function App() {

  const [Address, setAddress] = useState('');

  return (
    <Switch>
      <Route path="/" exact>
      <Loading Address={Address} setAddress={setAddress}/>
      </Route>
      <Route path="/main">
        <MainPage/>
      </Route>
    </Switch>
  );
}

export default App;
