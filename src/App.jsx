import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/homeComponents/home/Home"
import LayoutComponent from "./components/layout/Layout"
import SignUp from "./components/Form/SignUp"
import SignIn from "./components/Form/SignIn"
import Error from "./components/utility/Error"


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
      ]
    }

  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
