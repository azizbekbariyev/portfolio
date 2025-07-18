import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "../pages"

const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
                <Route index path="/" element={<Home />} />
        )
    )

    return <RouterProvider router={router} />
}

export default Router