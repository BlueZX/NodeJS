/* una vez el servidor sea un modulo y teniendo el index ya creado, haremos que la aplicación pueda distinguir entre rutas URL*/


var http = require("http"); // requiere al módulo http y lo ponemos en una variable llamada "http"
var url = require("url"); // requiere al módulo url y lo ponemos en una variable llamada "url"

function iniciar(){ // creamos la funcion de nuestro modulo server
	function onRequest(request, response){ // creamos una funcion llamadaa onRequest la cual tiene los objetos request y response
		var pathname = url.parse(request.url).pathname; // definimos una variabl pathname la cual ocupara el modulo url el cual nos entregara la ruta en la que se encuentra
		console.log("Peticion para "+ pathname +" Recibida");  // cada vez que se haga una peticion en el navegador imprimira en la consola la ruta en la que se encuentra.
		response.writeHead(200, {"Content-Type": "text/html"}); // cada vez que una peticion es recibida se envia un status HTTP 200 y el tipo definido que es (Content-Type) en el encabezado de la respuesta HTTP
		response.write("hello world"); // envia un texto en el cuerpo de la respuesta, en este caso "Hello World"
		response.end(); // se utiliza para terminar las respuestas
	}

	http.createServer(onRequest).listen(8888); // llamamos a la funcion "createServer" que se encuentra en el modulo http, la funcion retorna un objeto y este objeto tiene un metodo llamado listen
	console.log("Servidor Iniciado"); // mostramos un mensaje en la consola al iniciar el servidor, solo lo mostrara 1 vez
}

exports.iniciar = iniciar; // y exportamos la funcion iniciar

/* esto hara que la ruta en la que te encuentras en la app la muestre en pantalla*/