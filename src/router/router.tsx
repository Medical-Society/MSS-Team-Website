import { Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "../Components/auth/ProtectedRoute";
import ResetPassword from "../pages/ResetPass";
import VerifyEmail from "../pages/VerifyEmail";
import DoctorsSideBar from "../Components/DoctorsSideBar";
import AllDoctors from "../pages/AllDoctors";
import PendingDoctors from "../pages/PendingDoctors";
import ApprovedDoctors from "../pages/AcceptedDoctors";
import RejectedDoctors from "../pages/RejectedDoctors";
import DoctorDetails from "../Components/DoctorDetails";

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
                    <ProtectedRoute redirectPath="/" isAuth={false}>
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
                
                <Route path="doctors" element={
                    <ProtectedRoute isAuth={true} redirectPath="/login">
                        <div className="flex flex-col md:flex-row  justify-between h-full mt-14">
                            <DoctorsSideBar />
                            <Outlet />
                        </div>
                    </ProtectedRoute>
                    }
                >
                    <Route index element={<AllDoctors />} />
                    <Route path="pending" element={<PendingDoctors />} />
                    <Route path="approved" element={<ApprovedDoctors />} />
                    <Route path="rejected" element={<RejectedDoctors />} />
                    <Route path=":id" element={<DoctorDetails />} />
                </Route>
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<h1 className="text-4xl font-bold text-center">404 Not Found</h1>} />
        </>
    )
);

export default router;
