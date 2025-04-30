import React, { useContext, useState } from 'react';
import '../../css/AdminPanel.css'; // Importa el CSS externo
import UserList from './UserList';
import UserForm from './UserForm';
import { AuthContext } from '../../context/AuthContext.jsx'; // Importa el contexto

const AdminPanel = () => {
  const { mockUsers, setMockUsers } = useContext(AuthContext); // Obtiene los usuarios y el setter del contexto
  const [selectedUser, setSelectedUser] = useState(null); // Usuario seleccionado para editar

  // Función para agregar un nuevo usuario
  const addUser = (newUser) => {
    setMockUsers([...mockUsers, newUser]); // Añadir nuevo usuario
  };

  // Función para actualizar un usuario existente
  const updateUser = (updatedUser) => {
    const updatedUsers = mockUsers.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setMockUsers(updatedUsers); // Actualiza el usuario
  };

  // Función para eliminar un usuario
  const deleteUser = (userId) => {
    const filteredUsers = mockUsers.filter((user) => user.id !== userId);
    setMockUsers(filteredUsers); // Elimina el usuario
  };

  return (
    <div className="admin-panel">
      <h1>Panel de Administración</h1>
      {/* Lista de usuarios con estilos aplicados */}
      <UserList
        users={mockUsers}
        onEdit={setSelectedUser}
        onDelete={deleteUser}
      />
      {/* Formulario de usuario con estilos aplicados */}
      <UserForm
        onSubmit={selectedUser ? updateUser : addUser}
        selectedUser={selectedUser}
        onReset={() => setSelectedUser(null)}
      />
    </div>
  );
};

export default AdminPanel;
