import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect, Navigate
} from "react-router-dom";

import Timeline from './timeline';

export default function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/Roadmap-Snake" element={<Timeline />} />
        <Route path="/Roadmap-Snake/" element={<Timeline />} />
   
      </Routes>
    </Router>
  );
}

