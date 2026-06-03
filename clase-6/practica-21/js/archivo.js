let confirmacion= confirm("Quieres personalizar la página?")

if (confirmacion) {
	let nombre=prompt('Ingresar nombre','Aquí');
	document.querySelector("#bienvenide").innerHTML="Bienvenide, "+nombre+"!";
}else{
	document.querySelector("#bienvenide").innerHTML="Bienvenide a la prueba!"
}

let darkMode=confirm("Quieres navegar en Darkmode?")

if (darkMode) {
	document.querySelector("#darkins").style.backgroundColor ="black"
	document.querySelector("#darkins").style.color ="white"
	document.querySelector("body").style.backgroundColor ="black"
}



let horario=prompt("Que hora es?")

if (horario<=12) {
	document.querySelector("#despedida").innerHTML="Buenos días!"
} else if(horario<=18){
	document.querySelector("#despedida").innerHTML="Buenas Tardes!"
}else{
	document.querySelector("#despedida").innerHTML="Buenas Noches!"
}
