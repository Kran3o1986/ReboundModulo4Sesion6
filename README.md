# ReboundModulo4Sesion6

Rebound Módulo 4 Sesión 6

CUE: JAVASCRIPT ASÍNCRONO
REBOUND EXERCISE: HORAS ALREDEDOR DEL MUNDO
Para resolver este ejercicio, anteriormente debe haber revisado la lectura y los videos del CUE: JavaScript 
Asíncrono.
EJERCICIO:
En la siguiente actividad, practicaremos el uso de JavaScript asincrónico para crear una página web que 
muestre la hora actual en diferentes lugares del mundo, incluyendo ciudades como: Santiago, París, 
Londres, Nueva York, San Petersburgo, Beijing y Seúl.
El diseño de esta página es bastante simple. Usando Bootstrap, crearemos una serie de bloques que 
incluirán: la bandera del país, el nombre de la ciudad capital, y la hora local de ese país. Tomando como 
referencia a Santiago de Chile, debes buscar las diferencias de horas con las demás ciudades. Y utilizando 
setInterval(), debes poder ver el tiempo cambiando cada segundo en vivo.
Un aspecto importante de esta página es que los tiempos no aparecen todos a la vez. Al cargarla, solo se 
debería mostrar el primer “reloj”, correspondiente a Santiago. Cada zona horaria después de Santiago, se 
mostrará paulatinamente. Para lograrlo, tendrás que usar el método setTimeout(), para introducir la 
segunda zona horaria 4 segundos después de que se haya cargado la página. Asimismo, la tercera zona 
horaria se tiene que mostrar 8 segundos después, la cuarta a los 12 segundos, y así sucesivamente con 
las demás. Seúl debería poder verse al cabo de 24 segundos después de cargar la página completamente.
