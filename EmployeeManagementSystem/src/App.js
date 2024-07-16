import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import EmployeePage from './page/EmployeePage';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
    <Route path="/" element={<EmployeePage />} />
    </Routes>
  </Router>
  );
}

export default App;
