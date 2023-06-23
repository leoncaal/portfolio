"use client";

import styles from "./Contacto.module.css";
import Validation from "./Validation";
import { useState } from "react";
import axios from "axios";
import alrt from 'sweetalert2';
import {useTranslations} from 'next-intl';
import { Spinner } from "@material-tailwind/react";
import { useInView } from "react-intersection-observer";

const Contacto = () => {

  const t = useTranslations('Contacto');
  const { ref: myRef, inView: formIsVisible } = useInView();
  const { ref: myRef2, inView: formIsVisible2 } = useInView();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    comments: ""
  });

  const [spinner, setSpinner] = useState(false);

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
  const handlerSummit = async (event) => {
    event.preventDefault();
    const numErrors = Object.keys(errors).length;
    if (numErrors === 0 && inputs.name !== "" && inputs.email !== "" && inputs.comments !== "") {

      try {
        setSpinner(true);
        const res = await axios.post('/api/handler', inputs);
        if (res.data.message === "Enviado con exito"){
          setSpinner(false);
          alrt.fire({
          title: t('gracias'),
          text: t('exito'),
          iconHtml: `<img src="/assets/images/iconos/send.png">`,
          timer: 2500,
          width: "300px",
          timerProgressBar: true,
          background: "#DDE6ED",
          showConfirmButton: false,
          customClass: {
            icon: styles.noborder
          }
      }
          )
          setInputs({
            name: "",
            email: "",
            comments: ""
          });
          setErrors({});
        }
        

      } catch (error) {
        setSpinner(false);
        if (error.response.data.error === "Fallo el envio"){
          alrt.fire({
          title: t('disculpa'),
        text: t('error'),
        iconHtml: `<img src="/assets/images/iconos/notsend.png">`,
        timer: 2500,
        width: "300px",
        timerProgressBar: true,
        background: "#DDE6ED",
        showConfirmButton: false,
        customClass: {
          icon: styles.noborder,
        }
       })
        }
        
      }
      
    } else {
      alrt.fire({
        title: t('favor'),
      text: t('ingresa'),
      /* icon: "warning", */
      iconHtml: `<img src="/assets/images/iconos/alert.png">`,
      timer: 2500,
      width: "300px",
      timerProgressBar: true,
      background: "#DDE6ED",
      showConfirmButton: false,
      customClass: {
        icon: styles.noborder,
      }
    })
    }
  };

  return (
    <div className={styles.divFirst}>
      {spinner === true ? <div className={`${styles.spinner} flex items-end gap-8 backdrop-brightness-50 backdrop-opacity-70`}>
      <Spinner color="gray" className={`${styles.spinnerSize} h-12 w-12`} />
    </div> : null } 
      <div className={styles.destination} id="contacto"></div>
      <div className={styles.divMain}>
      <form className={`${styles.form}`}>
      
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className={styles.txtTitle}>{t('titulo')}</h2>
          <div ref={myRef} className={`${formIsVisible ? styles.animatefade : styles.opacity} "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"`}>
            <div className="col-span-full">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                {t('nombre')}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={inputs.name}
                  onChange={handlerInputs}
                  autoComplete="given-name"
                  className="bg-[#ffffff] text-black px-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-gray-800 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className={styles.txtAlert}>{errors.name && t('vnombre')}</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                {t('email')}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={inputs.email}
                  onChange={handlerInputs}
                  autoComplete="email"
                  className="bg-[#ffffff] text-black px-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-gray-800 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className={styles.txtAlert}>{errors.email && t('vemail')}</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                {t('comentarios')}
              </label>
              <div className="mt-2">
                <textarea
                  id="comments"
                  name="comments"
                  type="text"
                  value={inputs.comments}
                  onChange={handlerInputs}
                  rows={4}
                  className="bg-[#ffffff] text-black px-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-gray-800 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className={styles.txtAlert}>{errors.comments && t('vcomentarios')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button ref={myRef2} type="button" className={`${styles.btnCancelar} ${formIsVisible2 ? styles.animatezoom : styles.opacity} "text-sm font-semibold leading-6"`} onClick={handlerClean}>
          {t('cancelar')}
        </button>
        <button
          ref={myRef2}
          type="submit"
          className={`${formIsVisible2 ? styles.animatezoom : styles.opacity} flex justify-center rounded-full bg-[#526D82] px-9 py-1.5 text-sm font-semibold transition duration-700 leading-6 text-white shadow-sm hover:bg-[#9DB2BF] transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          onClick={handlerSummit}
        >
          {t('enviar')}
        </button>
      </div>
    </form>
      </div>
    </div>
  );
};

export default Contacto;
