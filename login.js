/* LOGIN:

Prompt va a solicitar al usuario un email
Validamos que el email sea un email

RegEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) nos retorna un boolean
En caso de que no volvera a solicitar
En caso de que si sea valido dira email registrado {emailRegistrado}

una vez solicitado el email vamos a solicitar password
Valideremos que tenga una letra en mayuscula
que no sea null o ''
que tenga almenos 6 caracteres
En caso de que no volvera a solicitar
En caso de que si sea valido dira password registrada {password} 

*/

/* function validarEmail (email) {
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
}

function validarPassword(password) {
    return ( Boolean(password) && password.length > 6 && password != password.toLowerCase())
}

function obtenerDato(data){

    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
        }
        return dato
    }

const DATOS = {
    EMAIL: {
        mensaje: "Bienvenido, por favor ingrese su email: ",
        error: "Error, por favor ingrese su email valido: ",
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: "Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ",
        error: "Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ", 
        validacion: validarPassword
    }
}

function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
} */


const DATOS = {
}

const VALIDACION = {
    EMAIL: {
        mensaje: "Bienvenido, por favor ingrese su email: ",
        error: "Error, por favor ingrese su email valido: ",
        registrado: 'Email registrado: ',
        funcion: function validarEmail(){
            return (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(DATOS.EMAIL)))
        }
    },
    PASSWORD: {
        mensaje: "Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ",
        error: "Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ", 
        registrado: 'Password registrado',
        funcion: function validarContraseña(){
            return (DATOS.PASSWORD === String(DATOS.PASSWORD).toLowerCase() || DATOS.PASSWORD === null || String(DATOS.PASSWORD).length < 6)
        },
    }
}

function login(dato){

    DATOS[dato] = prompt(VALIDACION[dato].mensaje)

    while(VALIDACION[dato].funcion()){
        alert(VALIDACION[dato].error)
        DATOS[dato] = prompt(VALIDACION[dato].mensaje)
    }

    alert(`${dato} registrado: ${DATOS[dato]}`)
}

login('Email')

login('Password')