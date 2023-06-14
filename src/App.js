import logo from './logo.svg';
import './App.css';
import List from './components/List';
import ListF from './components/ListF'
import { Routes, Route } from 'react-router-dom'
import Hook from './components/Hook'
import MyForm from './components/Form'
import ListAddFn from './components/ListAddFn';
import { Master } from './modules/layout/Master';
import { RouteWithLayout } from './modules/layout/RouteWithLayout';

function App() {
  return (
    <Routes>

      <Route path='/' element={<RouteWithLayout
        component={ListAddFn}
        exact
        layout={Master}
        path="/"
      />}></Route>

    </Routes>

  );
}

export default App;
