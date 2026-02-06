import './App.css'
import Contact from '../components/Contact'
import Country from '../components/Country'
import About from '../components/About'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Applayout from '../components/Applayout'
import Error from '../components/Error'
import Carddetails from '../components/Carddetails'
import ProtectedRoute from '../components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'


function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />
    },
    {
      path:'/',
      element:<Applayout/>,
      errorElement: <Error/> ,
      children : [
        {
          path:'/',
          element: <ProtectedRoute><Home/></ProtectedRoute>
        },
        {
          path:'about',
          element: <ProtectedRoute><About/></ProtectedRoute>
        },
        {
          path:'country',
          element: <ProtectedRoute><Country/></ProtectedRoute>
        },
        {
          path:'country/:id',
          element: <ProtectedRoute><Carddetails/></ProtectedRoute>
        },
        {
          path:'contact',
          element: <ProtectedRoute><Contact/></ProtectedRoute>
        },
      ]
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
