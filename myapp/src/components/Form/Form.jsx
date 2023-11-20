import React, { useState } from "react";
import './Form.css'
export default function Form() {
  const [form, setForm] = useState({ name: '', subname: '', email: '', tel: '', password: '',password2: ''})


  const handleSubmit = (event) => {
      event.preventDefault()

      if (!form.name) {
        alert('EL campo nombre no puede quedar vacio')
        return null
      }
      if (!form.subname) {
        alert('EL campo apellido no puede quedar vacio')
        return null
      }
      if (!validarEmail(form.email)) {
        alert('Debe ingresar un email valido')
        return null
      }
      if (!form.tel) {
        alert('EL campo telefono no puede quedar vacio')
        return null
      }
      console.log(`pass:${form.password}  pass2:${form.password2}`);
      if (!form.password) {
        alert('EL campo password no puede quedar vacio')
        return null;
      }
      if (!form.password2) {
        alert('EL campo password confirm no puede quedar vacio')
        return null;
      }
    if (form.password !== form.password2) {
        alert('Las contaseñas deben coicidir')
        return null;
      }
      console.log("handleSubmit", form)
      alert('Registro realizado con exito')
      limpiarCampos()
  }
         
    const handleChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      console.log("handleChange", name, value)
      setForm({ ... form, [name]: value })
    }
      
    const validarEmail = (email) => {
        let patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return patron.test(email)
     }

    function limpiarCampos() {
        form.name = ''
        form.subname = ''
        form.email = ''
        form.tel = ''
        form.password = ''
        form.password2 = '' 
        document.getElementById("name").value = ''
        document.getElementById("subname").value= ''
        document.getElementById("email").value = ''
        document.getElementById("tel").value = ''
        document.getElementById("password").value = ''
        document.getElementById("password2").value = '' 
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          
        />
        <label>Apellido</label>
        <input
          id="subname"
          name="subname"
          type="text"
          value={form.subname}
          onChange={handleChange}
        />
         <label>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
         
         <label>Teléfono</label>
        <input
          id="tel"
          name="tel"
          type="number"
          value={form.tel}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <label htmlFor="password2">Confirmar Contraseña</label>
        <input
          id="password2"
          name="password2"
          type="password"
          value={form.password2}
          onChange={handleChange}
        />
        
        <button type="submit">Enviar</button>
      </form>
    );
  }
  