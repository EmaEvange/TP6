import React, { useState } from "react";
import './Form.css'
export default function Form() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: "",
        email: "",
        tel: ""
      });

       
  
    return (
      <form >
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
          
        />
        <label htmlFor="subnombre">Apellido</label>
        <input
          id="subname"
          name="subname"
          type="text"
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
         <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
         
         <label htmlFor="tel">Teléfono</label>
        <input
          id="tel"
          name="tel"
          type="number"
          value={form.tel}
          onChange={e => {
            setForm({
              ...form,
              tel: e.target.value
            });
          }}
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
        
        <button type="submit" onSubmit = {console.log(form)}>Enviar</button>
      </form>
    );
  }
  