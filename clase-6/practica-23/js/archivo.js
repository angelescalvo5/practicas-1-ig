function calcular(){
//valores del formulario
let aulaCero =Number(document.querySelector('[name="aulaCero"]').value);
let aulaUno =Number(document.querySelector('[name="aulaUno"]').value);
let aulaDos =Number(document.querySelector('[name="aulaDos"]').value);
let aulaTres =Number(document.querySelector('[name="aulaTres"]').value);
let aulaCinco =Number(document.querySelector('[name="aulaCinco"]').value);

let pupitres=[aulaCero,aulaUno,aulaDos,aulaTres,aulaCinco]
let nombres=["001", "101", "201", "301", "501"];


let max= Math.max(aulaCero,aulaUno,aulaDos,aulaTres,aulaCinco);

let min=Math.min(aulaCero,aulaUno,aulaDos,aulaTres,aulaCinco)

let faltantes=0;
for (let i = 0; i<pupitres.length;i++){
	if(pupitres[i]<80){
		faltantes+=80-pupitres[i]
	}
}

document.querySelector("#calcularr").addEventListener("click", calcular);
document.querySelector("#resultado").innerHTML=
"El aula con mas pupitres es el "+max+"pupitres. <br>"+
"El aula con menos pupitres es el "+min+"pupitres. <br>"
"Hay que comprar "+faltantes+"pupitres para completar 80 en todas las aulas."

}