import logo from './logo.svg';
// import './App.css';
import List from './components/List';
import ListF from './components/ListF'
import { Routes, Route, BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hook from './components/Hook'
import MyForm from './components/Form'
import ListAddFn from './components/ListAddFn';
import { Master } from './modules/layout/Master';
import { RouteWithLayout } from './modules/layout/RouteWithLayout';
import Example from 'components/Example';

function App() {
  const BrowserRoutes=createBrowserRouter([
    {
      path:"/",
      element:<Master />,
      children:[
        {
          path:"/",
          element:<Example />
        },
        {
          path:"list-fn",
          element:<ListAddFn />
        },
        {
          path:"form",
          element:<MyForm />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={BrowserRoutes}/>
    // <>
    //   <Routes>
    //     <Route path="/" element={<Master />}>
    //       <Route path='/' element={<List />} />
    //       <Route path='list-fn' element={<ListAddFn />} />
    //       <Route path='form' element={<MyForm />} />
    //     </Route>

    //     {/* <Route path='/' element={<RouteWithLayout
    //       component={ListAddFn}
    //       exact
    //       layout={Master}
    //     // path="/"
    //     />}></Route> */}

    //   </Routes>
    // </>



  );
}

export default App;
