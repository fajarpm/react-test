import logo from './logo.svg';
import './App.css';
import List from './components/List';
import ListF from './components/ListF'
import { Routes, Route } from 'react-router-dom'
import Hook from './components/Hook'
import MyForm from './components/Form'

function App() {
  return (
    <Routes>
      <Route path='list' element={<List />}></Route>
      <Route path='list-f' element={<ListF />}></Route>
      <Route path='hook' element={<Hook />}></Route>
      <Route path='form' element={<MyForm />}></Route>
    </Routes>

  );
}

export default App;
