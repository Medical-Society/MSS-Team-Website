import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

interface IProps {
    children: ReactNode;
    redirectPath: string;
    isAuth: boolean;
}

const ProtectedRoute = ({ children, redirectPath, isAuth }: IProps) => {
    const token = Cookies.get('token');
    const isAuthAdmin = isAuth ? token : !token;
    return isAuthAdmin ? <Navigate to={redirectPath} /> : <>{children}</>;
}

export default ProtectedRoute;