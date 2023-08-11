import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendRegister, sendValidationEmail } from "../services/sendRegister"; // Asegúrate de importar correctamente esta función
// También, asegúrate de tener la función generateVerificationCode implementada o utiliza una lógica adecuada

export function RegisterForm() {
  const [formData, setFormData] = useState({
    nameMember: "",
    email: "",
    password: "",
    repeatPassword: "",
    birthday: "",
    acceptedTOS: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    // Validar los campos antes de procesar el registro
    if (
      formData.nameMember === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.repeatPassword === "" ||
      formData.birthday === "" ||
      !formData.acceptedTOS
    ) {
      alert("Completa todos los campos");
      return;
    }

    try {
      // Enviar los datos del formulario al servidor
      const response = await sendRegister(formData);

      // Manejar la respuesta del servidor
      if (response && response.success) {
        // Generar un código de verificación
        const verificationCode = generateVerificationCode();

        // Enviar correo de verificación
        await sendValidationEmail(
          formData.email,
          formData.nameMember,
          verificationCode
        );

        alert(
          "Registro exitoso. ¡Un correo de verificación ha sido enviado a tu dirección de correo electrónico!"
        );

        // Redireccionar al usuario a la página de inicio de sesión
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
      alert(
        "Hubo un error en el registro. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <form className="register-form" onSubmit={handleCreate}>
      <h2>Register</h2>
      <input
        type="text"
        name="nameMember"
        placeholder="Name *"
        value={formData.nameMember}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password *"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="repeatPassword"
        placeholder="Repeat Password *"
        value={formData.repeatPassword}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="birthday"
        placeholder="Birthday *"
        value={formData.birthday}
        onChange={handleChange}
        required
      />
      <label>
        AcceptedTOS
        <input
          type="checkbox"
          name="acceptedTOS"
          checked={formData.acceptedTOS}
          onChange={handleChange}
          required
        />
      </label>

      {/* Botón para crear cuenta */}
      <button type="submit" className="btn" name="createAccountButton">
        Create
      </button>

      {/* Enlace para ir a LoginPage (inicio sesión) */}
      <p className="message">
        Already registered? <Link to="/login">Sign In</Link>
      </p>
    </form>
  );
}
