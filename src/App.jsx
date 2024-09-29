import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeAPI } from './routes/home'

const App = () => {


    const router = createBrowserRouter([
        {
            path: "/", element: <HomeAPI />,
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App