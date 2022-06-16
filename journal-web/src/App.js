import NavBar  from './components/NavBar';
import Home from './PageViews/Home';
import Journal from './PageViews/Journal'
import Read from './PageViews/Read'
import Write from './PageViews/Write'


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

{/*import logo from './logo.svg';*/}


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Journal" element={<Journal />}/>
            <Route path="/Read" element={<Read />}/>
            <Route path="/Write" element={<Write />}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
