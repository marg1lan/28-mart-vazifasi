import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

const App = () => {

  const router =createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"Page2",
      element:<Page2/>
    },
    {
      path:"Page3",
      element:<Page3/>
    }
  ])


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App