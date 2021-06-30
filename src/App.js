import './App.css';
import Home from './Home'
import Colours from './Colours'

import { Route } from 'react-router-dom'

function App() {
  return (
   <div>
     <Route exact path='/' component={Home} />
     <Route path='/Colours' component={Colours} />
    </div>
  );
}

export default App;
