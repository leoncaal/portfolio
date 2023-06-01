const Validation = (inputs) => {

    let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let errors = {};
    
    if (!inputs.name) {
        errors.name = "* Ingresa tu nombre";
    }
    if (!regexMail.test(inputs.email)) {
        errors.email = "* Ingresa un email valido";
    }
    if (!inputs.comments) {
        errors.comments = "* Te agradeceria un comentario";
    }

    return errors;
};

export default Validation;