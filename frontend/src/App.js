import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Main from './Main';
import Image from '../src/components/Image/Image'
import EditImageForm from './components/EditImageForm/EditImageForm';
import SearchBar from './components/Search Bar/SearchBar';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Main />} />
        <Route exact path = '/show/:id' element = {<Image />} />
        <Route exact path = '/:id/edit' element = {<EditImageForm />} />
        <Route exact path = '/search' element = {<SearchBar />} />
        <Route path="/:keyword" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
