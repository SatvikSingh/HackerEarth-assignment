import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Main from './Main';
import Image from '../src/components/Image/Image'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Main />} />
        <Route exact path = '/show/:id' element = {<Image />} />
      </Routes>
    </Router>
  );
}

export default App;
