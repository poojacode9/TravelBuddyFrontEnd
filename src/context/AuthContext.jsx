import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const role = localStorage.getItem("role");

    if (token) {

      setUser({
        token,
        id,
        name,
        email,
        phone,
        role
      });

    }

  }, []);

  const login = (userData) => {

    localStorage.setItem("token", userData.token);
    localStorage.setItem("id", userData.id);
    localStorage.setItem("name", userData.name);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("phone", userData.phone);
    localStorage.setItem("role", userData.role);

    setUser(userData);

  };

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("role");

    setUser(null);

  };

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