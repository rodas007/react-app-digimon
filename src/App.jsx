import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AnimesPage from './pages/AnimesPage/AnimesPage';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
        
       <Routes>
         <Route path="/" element={<HomePage />}/>
         <Route path="/animes" element={<AnimesPage />}/>
       </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
