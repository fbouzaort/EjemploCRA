import React from 'react';
import '../styles/login.scss';

const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Nombre de usuario: </label>
        <input type="email" name="username" required/>
        <label htmlFor="password">Contraseña: </label>
        <input type="password" name="password" required/>
        <input type="submit" value="Iniciar Sesión"/>
      </form>
    </div>
  );
};

Login.propTypes = {

};

export default Login;
