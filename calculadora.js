/* CALCULADORA
-tener soporte para las sig operacion: +, -
    -'+'
    -'-'

operacionesValidas = ['+', '-']

Solicitar una operacion:
La operacion es valida si es alguna de las operaciones validas 
Vamos a solicitar un numero 1: 
Validar que sea un numero
Vamos a solcitar un numero 2:
validar que sea un numero


En caso de elegir una '+'
Aca sumamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}

En caso de elegir una '-'
Aca restamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado} */


const VALIDAR = {
    numero: {
        mensaje: 'Ingrese un número',
        error: 'Error: No ingresó un número',
        funcion: function validarNumero(numero){
            return (!numero || isNaN(numero))
        }
    },

    operador: {
        mensaje: `¿Qué operación desea realizar?
        - Para suma, ingrese '+'
        - Para resta, ingrese '-'`,
        error: 'Error: ingresó un operador incorrecto',
        }
}

const CALCULO = {
}

function calculadora(){

    operador = prompt(VALIDAR.operador.mensaje)
    while (!(operador === '+' || operador === '-')){
        alert(VALIDAR.operador.error)
        operador = prompt(VALIDAR.operador.mensaje)
    }

    numero1 = prompt(VALIDAR.numero.mensaje)
    while(VALIDAR.numero.funcion(numero1)){
        alert(VALIDAR.numero.error)
        numero1 = prompt(VALIDAR.numero.mensaje)
    }

    numero2 = prompt(VALIDAR.numero.mensaje)
    while(VALIDAR.numero.funcion(numero2)){
        alert(VALIDAR.numero.error)
        numero2 = prompt(VALIDAR.numero.mensaje)
    }

    if(operador === '+'){
        return alert(`El resultado de ${numero1} ${operador} ${numero2} es: ${Number(numero1) + Number(numero2)}`)
    }else{
        return alert(`El resultado de ${numero1} ${operador} ${numero2} es: ${Number(numero1) - Number(numero2)}`)
    }
}

calculadora()