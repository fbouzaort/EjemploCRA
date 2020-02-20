import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/login.scss';

const Login = ({ history, pochoclo }) => {

  // useEffect(() => {
    // bla bla
  // },[]);

  const [email, setEmail] = useState('fran@cisco.com');
  const [password, setPassword] = useState('francisco');
  const [errorMsg, setErrorMsg] = useState('');

  // const handleEmailChange = ({ target: { value } }) => {
  //   setEmail(value);
  // }

  // const handlePasswordChange = ({ target: { value } }) => {
  //   setPassword(value);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://tiendaonline2020.herokuapp.com/api/user/login',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(res => {
          console.log("Éxito!",res);
          if(res.status && res.status !== 200)
          {
            setErrorMsg("No existe un usuario con dicha contraseña. Intente nuevamente.");
          } else {
            history.push("/tareas");
          }
        })
        .catch(err => console.log("Error!",err));
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Nombre de usuario: </label>
        <input type="email" name="email" value={email} onChange={({ target: { value } }) => setEmail(value)} required/>
        <label htmlFor="password">Contraseña: </label>
        <input type="password" name="password" value={password} onChange={({ target: { value } }) => setPassword(value)} required/>
        <input type="submit" value="Iniciar Sesión"/>
        { errorMsg &&
          <h2 className="error">{errorMsg}</h2>
        }
      </form>
    </div>
  );
};

Login.propTypes = {

};

export default withRouter(Login);
