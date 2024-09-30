import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeAPI, action as actionHome, loader as loaderHome } from './routes/home'

const App = () => {


    const router = createBrowserRouter([
        {
            path: "/", element: <HomeAPI />, action: actionHome, loader: loaderHome,
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App