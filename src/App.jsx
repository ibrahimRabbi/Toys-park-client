import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/homeComponents/home/Home"
import LayoutComponent from "./components/layout/Layout"
import SignUp from "./components/Form/SignUp"
import SignIn from "./components/Form/SignIn"
import Error from "./components/utility/Error"
import AuthContext from "./components/Authentication/AuthContext"
import AllToys from "./components/allToys/AllToys"
import MyToys from "./components/myToys/MyToys"
import AddToys from "./components/addToys/AddToys"


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutComponent />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/signin',
          element: <SignIn />
        },
        {
          path: '/alltoys',
          element: <AllToys />,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: '/mytoys',
          element: <MyToys />
        },
        {
          path: '/addtoys',
          element: <AddToys />
        },


      ]
    }

  ])
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  )
}

export default App
