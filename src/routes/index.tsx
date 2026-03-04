import HomeLayout from '../layout/Home'
import { createBrowserRouter } from 'react-router-dom'
import HomeRoutes from './HomeRoutes'
import Page404 from '../pages/Page404'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Page404 />,
        children: HomeRoutes
    }
])

export default routes
