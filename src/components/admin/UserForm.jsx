import React, { useState, useEffect } from 'react';
import '../../css/UserForm.css';

const UserForm = ({ onSubmit, selectedUser, onReset }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    contraseña: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        nombre: selectedUser.nombre || '',
        apellidos: selectedUser.apellidos || '',
        email: selectedUser.email || '',
        contraseña: '', // No se muestra contraseña real
      });
    }
  }, [selectedUser]);

  const validateForm = () => {
    const { nombre, apellidos, email, contraseña } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {};

    if (!nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    if (!apellidos.trim()) newErrors.apellidos = 'Los apellidos son obligatorios.';
    if (!emailRegex.test(email)) newErrors.email = 'El email no es válido.';
    if (!selectedUser && contraseña.length < 6) {
      newErrors.contraseña = 'La contraseña debe tener al menos 6 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData, selectedUser?.id || null);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>{selectedUser ? "Editar Usuario" : "Crear Usuario"}</h2>

      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <p className="error">{errors.nombre}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="apellidos">Apellidos:</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
        />
        {errors.apellidos && <p className="error">{errors.apellidos}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      {!selectedUser && (
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />
          {errors.contraseña && <p className="error">{errors.contraseña}</p>}
        </div>
      )}

      <div className="form-buttons">
        <button type="submit" className="submit-button">
          {selectedUser ? "Actualizar" : "Crear"}
        </button>
        {selectedUser && (
          <button type="button" className="cancel-button" onClick={onReset}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
