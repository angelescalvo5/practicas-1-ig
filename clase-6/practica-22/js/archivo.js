function calcular(){
	let precio= Number(document.querySelector("#precio").value);
	let descuento= Number(document.querySelector("#descuento").value);

	let montoDescuento = precio*(descuento/100);
	let precioFinal =precio-montoDescuento;
	let precioRedondeado = Math.round(precioFinal);
	document.querySelector("#resultado").innerText =
	"precio final :$" + precioRedondeado;
}
document.querySelector("#calcularr").addEventListener("click", calcular);