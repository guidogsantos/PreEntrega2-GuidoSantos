//Datos principales para conocer al usuario

let nombre = prompt("Ingrese su nombre");
console.log(nombre);

let apellido = prompt("Ingrese su apellido");
console.log(apellido);

let usuario = nombre + " " +apellido

alert("Bienvenido " + usuario + " al simulador de cuentas");

alert("A continuación le pediremos algunos datos para saber a que paquete de clientes pertenece");

let salario = prompt("Por favor, ingrese su salario neto");
console.log(salario);

let gastos = prompt("Ingrese un estimado de gastos mensuales, por ejemplo, Alquiler, Impuestos, Patente automor, etc...")
console.log(gastos);

let total = salario - gastos;
console.log(total);



// Condicional para saber a que cuenta pertenece

if (total < 10000) {
    alert("Felicitaciones " + usuario + " a usted le corresponde una cuenta BASICA")
    console.log("BASICA")
    document.write("<h1> Felicitaciones " + usuario + " a usted le corresponde una cuenta <a style=color:Red;>BASICA</a> </h1>")
} else if (total >= 10000 && total <=49999) {
    alert("Felicitaciones " + usuario + " a usted le corresponde una cuenta GOLD")
    console.log("GOLD")
    document.write("<h1> Felicitaciones " + usuario + " a usted le corresponde una cuenta <a style=color:#E6C900;>GOLD</a> </h1>")
} else if (total >= 50000 && total <=99999) {
    alert("Felicitaciones " + usuario + " a usted le corresponde una cuenta PLATINUM")
    console.log("PLATINUM")
    document.write("<h1> Felicitaciones " + usuario + " a usted le corresponde una cuenta <a style=color:#0057A0;>PLATINUM</a></h1>")
} else if (total > 100000) {
    alert("Felicitaciones " + usuario + " a usted le corresponde una cuenta BLACK")
    console.log("BLACK")
    document.write("<h1> Felicitaciones " + usuario + " a usted le corresponde una cuenta <a style=color:#000000;>BLACK</a></h1>")
}