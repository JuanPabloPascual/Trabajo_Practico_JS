### CALCULADORA

Funcionalidades:

CALCULADORA
-tener soporte para las sig operacion: +, -
    -'+'
    -'-'

HISTORIAL:
-historial

LOGIN:
-crear usuario (esta se ejecuta al entrar a la caluladora)
    -email => debe estar validado


Utilidades:
-validacion
-opcion de CANCELAR

INGRESO DE DATOS:
-prompt

EGRESO DE DATOS:
-alert



LOGIN:

Prompt va a solicitar al usuario un email
Validamos que el email sea un email

RegEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) nos retorna un boolean
En caso de que no volvera a solicitar
En caso de que si sea valido dira email registrado