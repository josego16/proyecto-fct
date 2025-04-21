import { createContext, useState, useEffect } from "react";

export const TOKEN_KEY = 'TOKEN';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogged: false,
    username: '',
    id: 0,
    jwt: ''
  });

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      setUser({
        isLogged: true,
        username: 'admin', // Valor fijo para pruebas
        id: 1,
        jwt: token
      });
    }
  }, []);

  const login = async (username, password) => {
    // Simulación de login sin backend
    if (username === "admin" && password === "1234") {
      const fakeToken = "fake-jwt-token-12345";

      localStorage.setItem(TOKEN_KEY, fakeToken);

      setUser({
        isLogged: true,
        username,
        id: 1,
        jwt: fakeToken
      });

      return { error: false, data: "Sesión iniciada correctamente" };
    } else {
      return { error: true, data: "Usuario o contraseña incorrectos" };
    }
  };

  const logout = () => {
    setUser({
      isLogged: false,
      username: '',
      id: 0,
      jwt: ''
    });
    localStorage.removeItem(TOKEN_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
