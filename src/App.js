
import './App.css';

import { Home } from './Components/Home';
import { Signup } from './Components/Signup'
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/signup" element={ <Signup />} />
          </Routes>
      </Router>

    </>
  );
}

export default App;
