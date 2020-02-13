import React from 'react';

// Ya estoy recibiendo desestructuradas a las props! No necesito
//      tener una variable para las props.
const Tarea = ({tarea : { nombre }}) => <p>{nombre}</p>

export default Tarea;