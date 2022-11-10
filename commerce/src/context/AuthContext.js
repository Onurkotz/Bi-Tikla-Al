import { useState, useEffect, createContext, useContext } from "react";
import { userIsMe, userLogout } from "../api";
import Loading from "../components/Loading/Loading";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Burada useEffect ile sayfa yüklendiği anda userIsMe fon'dan gelen bilgiler tekrar yükleniyor. useEfect içerisinde async bir fonk. çalıştıramayacağımız için anonim bir fonk. yazarak bu sorunu aştım.
  useEffect(() => {
    (async () => {
      try {
        const me = await userIsMe();
        setLoggedIn(true);
        setUser(me);
        setLoading(false);
        console.log("me: ", me);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  const logout = async (cb) => {
    setLoggedIn(false);
    setUser(null);
    await userLogout();
    localStorage.removeItem("access-token");
		localStorage.removeItem("refresh-token");
    cb();
    // Burada setLoggedIn ve setUser'ı başlangıç değerlerine çektim. api deki userLogout fonk. çalıştırdıktan ve çıkıştan sonra localdeki tokenları silmesini istedim. callback ise yönlendirme için yazdığım callback.
  };

  const values = {
    user,
    loggedIn,
    login,
    logout,
  };

  if (loading) {
    return <Loading />;
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

// Yukarıda kullanıcı alındığında loggedIn true oluyor. Kullanıcı bilgileri de setUser fonk. ile ilgili componentlerde kullanılmak üzere user'a eşitleniyor.
