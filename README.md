# Idolearning
Resolución de ejercicio propuesto por iDO Learning

Instrucciones:

Pasos a seguir:
1- A traves de una herramienta como Postman, enviar una petición POST a la dirección http://127.0.0.1:3000/login
   Esto devolverá un token el cual debera copiar, para utiliazrlo en el siguiente paso.
   
2- A traves de una herramienta como Postman, enviar una peticion GET a la direccion http://127.0.0.1:3000/verify 
   con los parametros access_token (aca deerá ingrear el token copiado anteriormente)
   
 Tipo de respuestas:
   
  -Si no ingresa el token, recibira un codigo 500 con el mensaje que no ha introducido un token
  
  -Si ingresa el parametro access_token, pero es invalido (no ha realizado el primer paso), 
   recibira un codigo 401 indicandole que no tiene un token valido
   
  -Si ingresa el parametro access_token devuelto en el paso 1, 
  recibira un codigo 200 indicandole ("Verificado") que se ha verificado correctamente
