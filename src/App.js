
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Playground from './views/Playground';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Dashboard/>}/>
    <Route exact path="/playground/:id" element={<Playground/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
