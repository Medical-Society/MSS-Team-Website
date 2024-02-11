import { Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "../Components/auth/ProtectedRoute";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
                path="/" 
                element={
                    <div className="h-full flex flex-col" >
                        <Navbar />
                        <Outlet />
                    </div>
                }
            >
                <Route index element={
                    <Home />
                } />
                <Route path="login" element={
                    <ProtectedRoute redirectPath="/">
                        <Login />
                    </ProtectedRoute>
                } />
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<h1 className="text-4xl font-bold text-center">404 Not Found</h1>} />
        </>
    )
);

export default router;