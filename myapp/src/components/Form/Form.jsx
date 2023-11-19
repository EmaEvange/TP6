import React, { useState } from "react";
import './Form.css'
export default function Form() {
  const [form, setForm] = useState({ name: '', subName: '', email: '', tel: '', password: '' })


  const handleSubmit = (event) => {
    console.log("handleSubmit", form)
    event.preventDefault()
    }
         
    const handleChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      console.log("hand leChange", name, value)
      setForm({ ... form, [name]: value })
      }
      

    return (
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
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
          value={form.lastName}
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
          
        />
        <label htmlFor="password2">Password</label>
        <input
          id="password2"
          name="password2"
          type="password"
        />
        
        <button type="submit">Enviar</button>
      </form>
    );
  }
  