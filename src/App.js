import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

// Use createRoot to render your app
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </Router>
  </div>
);

// Render the app using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
