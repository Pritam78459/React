import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown'
import ListValue from './components/ListIterator'
import ErrorBoundary from './components/ErrorBoundry'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Dropdown className="Dropdown" />
      <ListValue/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
