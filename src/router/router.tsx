import { Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "../Components/auth/ProtectedRoute";
import ResetPassword from "../pages/ResetPass";
import VerifyEmail from "../pages/VerifyEmail";
import DoctorsSideBar from "../Components/DoctorsSideBar";

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
                <Route index element={<Home />} />
                <Route path="login" element={
                    <ProtectedRoute isAuth={true} redirectPath="/doctors">
                        <Login />
                    </ProtectedRoute>
                } />
                <Route path="reset-password" element={<Outlet />}>
                    <Route index element={<h1>Reset Password</h1>} />
                    <Route path="doctors" element={<ResetPassword />} />
                    <Route path="patients" element={<ResetPassword />} />
                </Route>
                <Route path="verify-email" element={<Outlet />}>
                    <Route index element={<h1>Verify Email</h1>} />
                    <Route path="doctors" element={<VerifyEmail />} />
                    <Route path="patients" element={<VerifyEmail />} />
                </Route>
                
                <Route path="/doctors" element={
                    <ProtectedRoute isAuth={false} redirectPath="/login">
                        <div className="flex items-center justify-between h-full">
                            <DoctorsSideBar />
                            <Outlet />
                        </div>
                    </ProtectedRoute>
                    }
                >
                    <Route index element={<h1>all Doctors</h1>} />
                    <Route path="pending" element={<h1>pending Doctors</h1>} />
                    <Route path="approved" element={<h1>approved Doctors</h1>} />
                    <Route path="rejected" element={<h1>rejected Doctors</h1>} />
                </Route>
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<h1 className="text-4xl font-bold text-center">404 Not Found</h1>} />
        </>
    )
);

export default router;
