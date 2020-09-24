import React,{useState} from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Loading from './components/Loading';
import {Route,Link,Switch} from 'react-router-dom';

function App() {



  return (
    <Switch>
      <Route path="/">
        <MainPage/>
      </Route>
    </Switch>
  );
}

export default App;
