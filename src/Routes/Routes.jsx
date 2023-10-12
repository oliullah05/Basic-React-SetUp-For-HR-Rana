
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Videos from '../Pages/Videos/Videos/Videos';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/videos",
            element:<Videos></Videos>
        },
    
      ]
    },
  ]);


export default router;

