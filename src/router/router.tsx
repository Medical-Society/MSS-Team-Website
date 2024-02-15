import { Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "../Components/auth/ProtectedRoute";
import ResetPassword from "../pages/ResetPass";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
                path="/" 
                element={
                    <div className="h-full flex flex-col p-10" >
                        <Navbar />
                        <Outlet />
                    </div>
                }
            >
                <Route index element={<Home />} />
                <Route path="login" element={
                    <ProtectedRoute redirectPath="/">
                        <Login />
                    </ProtectedRoute>
                } />
                <Route path="reset-password" element={<Outlet />}>
                    <Route index element={<h1>Reset Password</h1>} />
                    <Route path="doctors" element={<ResetPassword />} />
                    <Route path="patients" element={<ResetPassword />} />
                </Route>
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<h1 className="text-4xl font-bold text-center">404 Not Found</h1>} />
        </>
    )
);

export default router;
