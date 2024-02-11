import { ReactNode, createContext, useState } from "react";
import { IAuth } from "../interfaces/IAuth";

interface IAuthContext {
    auth: IAuth;
    setAuth: (auth: IAuth) => void;
}

const defaultAdmin = {
    name: "",
    email: ""
}

const AuthContext = createContext<IAuthContext>({
    auth: {
        token: "",
        admin: defaultAdmin
    },
    setAuth: () => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<IAuth>({
        token: "",
        admin: defaultAdmin
    });
    
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;