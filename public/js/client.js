var socket = io();

socket.on("new image", function(data){
	data = JSON.parse(data);
	var container = document.querySelector("#imagenes");
	var source = document.querySelector("#image-template").innerHTML;

	var template = Handlebars.compile(source);

	container.innerHTML= template(data) + container.innerHTML;

});