/* Creamos un servidor basico http */

var http = require("http"); // requiere al módulo http y lo ponemos en una variable llamada "http"

http.createServer(function(request, response){ // llamamos a la funcion "createServer" que se encuentra en el modulo http, la funcion retorna un objeto y este objeto tiene un metodo llamado listen
	response.writeHead(200, {"Content-Type": "text/html"}); // cada vez que una peticion es recibida se envia un status HTTP 200 y el tipo definido que es (Content-Type) en el encabezado de la respuesta HTTP
	response.write("Hello World"); // envia un texto en el cuerpo de la respuesta, en este caso "Hello World"
	response.end(); // para terminar las respuestas
}).listen(8888); // el valor que toma listen es el numero de puerto el cual va a escuchar el servidor http

console.log("Servidor Iniciado."); // mostramos un mensaje en la consola

/* request y response son objetos*/