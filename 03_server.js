/* Creamos un servidor basico http */

var http = require("http");// requiere al módulo http y lo ponemos en una variable llamada "http"

function onRequest(request, response){ //creamos una funcion llamadaa onRequest la cual tiene los objetos request y response
	console.log("Petición Recibida"); // cada vez que se haga una peticion en el navegador imprimira en la consola el mensaje.
	response.writeHead(200,{"Content-Type": "text/html"});  // cada vez que una peticion es recibida se envia un status HTTP 200 y el tipo definido que es (Content-Type) en el encabezado de la respuesta HTTP
	response.write("HelloWorld"); // envia un texto en el cuerpo de la respuesta, en este caso "Hello World"
	response.end(); // se utiliza para terminar las respuestas
}

http.createServer(onRequest).listen(8888); // llamamos a la funcion "createServer" que se encuentra en el modulo http, la funcion retorna un objeto y este objeto tiene un metodo llamado listen

console.log("¡Servidor Iniciado!"); // mostramos un mensaje en la consola al iniciar el servidor, solo lo mostrara 1 vez