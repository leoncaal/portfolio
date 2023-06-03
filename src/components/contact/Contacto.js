"use client";

import styles from "./Contacto.module.css";
import Validation from "./Validation";
import { useState } from "react";
import axios from "axios";
import alrt from 'sweetalert2';

const Contacto = () => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    comments: ""
  });

  const [errors, setErrors] = useState({});

  const handlerInputs = (event) =>{
    setInputs ({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors (
      Validation({
        ...inputs,
        [event.target.name]: event.target.value
      })
    );

  }
  const handlerClean = () => {
    setInputs ({
      name: "",
      email: "",
      comments: ""
    });
    setErrors({});
  }

  const Toast = alrt.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })

  const handlerSummit = (event) => {
    event.preventDefault();
    const numErrors = Object.keys(errors).length;
    if (numErrors === 0 && inputs.name !== "" && inputs.email !== "" && inputs.comments !== "") {
      axios.post('/api/handler', inputs).then((res) => res && alrt.fire({
                    title: "Gracias",
                    text: res.data.message,
                    icon: "success",
                    confirmButtonColor: '#526D82'
                }
                
                    /* )).catch((error) => error && alrt.fire({
                      title: "Disculpa",
                    text: error.response.data.error,
                    icon: "error",
                    confirmButtonColor: '#526D82' })); */
                    )).catch((error) => error && Toast.fire({
                      title: "Disculpa",
                    text: error.response.data.error,
                    icon: "error",
                    confirmButtonColor: '#526D82' }));
      setInputs({
        name: "",
        email: "",
        comments: ""
      });
      setErrors({});
    } else {
      Toast.fire({
        title: "Por favor",
      text: "Ingresa todos los datos",
      icon: "warning",
      confirmButtonColor: '#526D82' })
    }
  };

  return (
    <div className={styles.divFirst}>
      <div className={styles.destination} id="contacto"></div>
      <div className={styles.divMain}>

      <form className={styles.form}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className={styles.txtTitle}>Contacto</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={inputs.name}
                  onChange={handlerInputs}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-gray-800 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className={styles.txtAlert}>{errors.name}</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={inputs.email}
                  onChange={handlerInputs}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-gray-800 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className={styles.txtAlert}>{errors.email}</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                Comentarios
              </label>
              <div className="mt-2">
                <textarea
                  id="comments"
                  name="comments"
                  type="text"
                  value={inputs.comments}
                  onChange={handlerInputs}
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-gray-800 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className={styles.txtAlert}>{errors.comments}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-white" onClick={handlerClean}>
          Cancelar
        </button>
        <button
          type="submit"
          className={styles.btnSend}
          onClick={handlerSummit}
        >
          Enviar
        </button>
      </div>
    </form>
      </div>
    </div>
  );
};

export default Contacto;
