//definiendo variables
let titulo= document.querySelectorAll('h1,h3')
let textos= document.querySelectorAll('p')
let lista=document.querySelector('ul')
let imagen= document.querySelector('img')

//cambiar a rojo
titulo.forEach(function(el){
el.addEventListener('click', function(){
this.style.color="red";
});
});

//textos
textos.forEach(function(el){
el.addEventListener('click', function(){
this.style.color="red";
});
});


//lista
lista.addEventListener('click', function(){
this.style.color="red";
});




//imagen desaparece
imagen.addEventListener('click', function(){
this.style.display = "none";
});