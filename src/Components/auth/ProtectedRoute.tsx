import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface IProps {
    children: ReactNode;
    redirectPath: string;
    isAuth: boolean;
}

const ProtectedRoute = ({ children, redirectPath, isAuth }: IProps) => {
    const { auth } = useAuth();
    const isAuthUser = isAuth ? auth.token : !auth.token;
    return isAuthUser ? <Navigate to={redirectPath} /> : <>{children}</>;
}

export default ProtectedRoute;