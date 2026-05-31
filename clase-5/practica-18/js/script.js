 alert("Al aceptar cambia todo")

//seleccionar elementos
let textos = document.querySelectorAll('p');
let titulos = document.querySelectorAll('h1 , h3');
let fondo = document.querySelector('body');

//cambiar fondo
fondo.style.backgroundColor = "black";

//cambiar los TITULOS
for (let i=0; i<titulos.length; i++){
titulos[i].innerText = "Titulo nuevo"
titulos[i].style.color = "violet"
titulos[i].style.fontSize = "40x"
}

//cambiar los textos 
for (let i = 0;i<textos.length ; i++){
	textos[i].textContent ="Parrafo cambiado"
    textos[i].style.color= "white"
    textos[i].style.fontSize ="20px"
}