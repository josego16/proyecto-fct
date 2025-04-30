import React from "react";
import "../../css/UserCard.css";

const UserCard = ({ user, onEdit, onDelete }) => {
  const { nombre, apellidos, email } = user;

  return (
    <div className="user-card">
      <div className="user-card-header">
        <h2 className="user-card-title">Información del Usuario</h2>
      </div>
      <div className="user-card-body">
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Apellidos:</strong> {apellidos}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      <div className="user-card-actions">
        <button className="edit-button" onClick={() => onEdit(user)}>Editar</button>
        <button className="delete-button" onClick={() => onDelete(user.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default UserCard;
