import './App.css';
import Home from './Home'
import { Route } from 'react-router-dom'

function App() {
  return (
   <div>
     <Route exact path='/' component={Home} />
        <h3>
          Fancy display heading
          <small class="text-muted">With faded secondary text</small>
        </h3>
    </div>
  );
}

export default App;
