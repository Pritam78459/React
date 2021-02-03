import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown'
import ListValue from './components/ListIterator'
import ErrorBoundary from './components/ErrorBoundry'
import {ThemeContext} from './components/Themes'
import React from 'react';



function App() {

  const {theme, toggle, dark} = React.useContext(ThemeContext)

  return (
    <div className="App" style = {{backgroundColor:theme.backgroundColor, color: theme.color}} >
      <ErrorBoundary>
      <Dropdown className="Dropdown" />
      <ListValue/>
      </ErrorBoundary>
      <button type="button" onClick ={toggle}
      style= {{backgroundColor:theme.backgroundColor, color: theme.color}}
      >
          Click Theme to toggle to {!dark ? 'dark': 'light'} theme
      </button>
    </div>
  );
}

export default App;
