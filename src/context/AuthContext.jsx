import { createContext, useState, useEffect } from "react";

export const TOKEN_KEY = 'TOKEN';

const AuthContext = createContext();

// Datos de prueba con email en lugar de username
const mockUsers = [
  { id: 1, nombre: "Admin", apellidos: "Admin", email: "admin@example.com", role: "admin", password: "admin123" },
  { id: 2, nombre: "User", apellidos: "One", email: "user1@example.com", role: "user", password: "user123" },
  { id: 3, nombre: "User", apellidos: "Two", email: "user2@example.com", role: "user", password: "user456" },
];

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogged: false,
    email: '', // Ahora se usa email en lugar de username
    id: 0,
    jwt: '',
    role: ''
  });

  const [mockUsersState, setMockUsers] = useState(mockUsers); // Estado para usuarios de prueba

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      setUser({
        isLogged: true,
        email: 'admin@example.com', // Valor fijo para pruebas, usando email
        id: 1,
        jwt: token,
        role: 'admin' // Valor fijo para pruebas
      });
    }
  }, []);

  const login = async (email, password) => {
    // Cambié la búsqueda a email en lugar de username
    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      const fakeToken = `fake-jwt-token-${foundUser.id}`;

      localStorage.setItem(TOKEN_KEY, fakeToken);

      setUser({
        isLogged: true,
        email: foundUser.email, // Almacena el email del usuario
        id: foundUser.id,
        jwt: fakeToken,
        role: foundUser.role
      });

      return { error: false, data: "Sesión iniciada correctamente" };
    } else {
      return { error: true, data: "Usuario o contraseña incorrectos" };
    }
  };

  const logout = () => {
    setUser({
      isLogged: false,
      email: '',
      id: 0,
      jwt: '',
      role: ''
    });
    localStorage.removeItem(TOKEN_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, mockUsers: mockUsersState, setMockUsers, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
