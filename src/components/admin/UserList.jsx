import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      {users && users.length > 0 ? (
        users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
};

export default UserList;
