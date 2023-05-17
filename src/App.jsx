import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/home/Home"
import LayoutComponent from "./components/layout/Layout"
 



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutComponent />,
      children: [
        {
          path: '/',
          element : <Home/>
        }
      ]
     }
    
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
