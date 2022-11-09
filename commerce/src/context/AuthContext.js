import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);
  };

  const values = {
    user,
    loggedIn,
    login,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

// Yukarıda kullanıcı alındığında loggedIn true oluyor. Kullanıcı bilgileri de setUser fonk. ile ilgili componentlerde kullanılmak üzere user'a eşitleniyor.