import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Presale from './pages/Presale';

function App() {
  return (
    <div className="App">
      <Router >
        <Route exact path='/' component={Home} />
        <Route path='/presale' component={Presale} />
      </Router>
    </div>
  );
}

export default App;
