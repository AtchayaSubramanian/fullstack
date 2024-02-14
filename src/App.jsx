import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Suspense,lazy } from "react"
import Spinner from "./components/spinner"
import Login from './pages/login';

const LazyHome=lazy(()=>import("./pages/Home.jsx"))
const LazyRegister=lazy(()=>import("./pages/register.jsx"))
const LazyWedding=lazy(()=>import("./pages/wedding.jsx"))
const LazyInfo=lazy(()=>import("./pages/info.jsx"))
const LazyOthers=lazy(()=>import("./pages/others.jsx"))
const LazyCorporate=lazy(()=>import("./pages/corporate.jsx"))
const LazyDash=lazy(()=>import("./pages/dash.jsx"))
const LazySidebarAdmin=lazy(()=>import("./pages/admindashboard.jsx"))
const LazyProfileDisplay=lazy(()=>import("./pages/profiledisplay.jsx"))
const LazyChart=lazy(()=>import("./pages/chart.jsx"))

const LazyPaymentComponent=lazy(()=>import("./pages/payment.jsx"))
function App() {
  const router=createBrowserRouter([
    {
      path:'/login',
      element:<Suspense fallback={<Spinner/>
      }><Login/></Suspense>
    },
    {
      path:'/home',
      element:<Suspense fallback={<Spinner/>
      }><LazyHome/></Suspense>
    },
    {
      path:'/register',
      element:<Suspense fallback={<Spinner/>
      }><LazyRegister/></Suspense>
    },{
    path:'/wedding',
    element:<Suspense fallback={<Spinner/>}><LazyWedding/></Suspense>
    },
    ,{
      path:'/info',
      element:<Suspense fallback={<Spinner/>}><LazyInfo/></Suspense>
      },
      {
        path:'/others',
        element:<Suspense fallback={<Spinner/>}><LazyOthers/></Suspense>
        },
        {
          path:'/dash',
          element:<Suspense fallback={<Spinner/>}><LazyDash/></Suspense>
          }
        , {
          path:'/corporate',
          element:<Suspense fallback={<Spinner/>}><LazyCorporate/></Suspense>
          }
          ,
          {
            path:'/admindashboard',
            element:<Suspense fallback={<Spinner/>}><LazySidebarAdmin/></Suspense>
            },
            {
              path:'/profiledisplay',
              element:<Suspense fallback={<Spinner/>}><LazyProfileDisplay/></Suspense>
              }
              ,
              {
                path:'/chart',
                element:<Suspense fallback={<Spinner/>}><LazyChart/></Suspense>
                }, {
                  path:'/payment',
                  element:<Suspense fallback={<Spinner/>}><LazyPaymentComponent/></Suspense>
                  }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
