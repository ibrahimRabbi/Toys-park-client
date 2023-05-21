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
import EditToys from "./components/myToys/EditToys"
import ShowDetials from "./components/ShowDetials/ShowDetials"
import PrivetRoute from "./components/privertRoute/PrivetRoute"
import Blog from "./components/blog/blog"


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
          loader: () => fetch('https://toys-park-server.vercel.app/toyslimit')
        },
        {
          path: '/alltoys/:id',
          element: <PrivetRoute><ShowDetials /></PrivetRoute>,
          loader: ({ params }) => fetch(`https://toys-park-server.vercel.app/toys/${params.id}`)
        },
        {
          path: '/mytoys',
          element: <MyToys />
        },
        {
          path: '/addtoys',
          element: <AddToys />
        },
        {
          path: '/mytoys/:id',
          element: <EditToys />,
          loader: ({ params }) => fetch(`https://toys-park-server.vercel.app/toys/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog />
        }
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
