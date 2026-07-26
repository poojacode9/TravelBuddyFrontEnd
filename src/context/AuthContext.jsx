import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const token = localStorage.getItem("token");
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");
        const role = localStorage.getItem("role");

        if (token) {
            setUser({
                token,
                name,
                email,
                role
            });
        }

    }, []);

    const login = (userData) => {

        localStorage.setItem("token", userData.token);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("role", userData.role);

        setUser(userData);
    };

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("role");

        setUser(null);
    };

    console.log(user);
    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);