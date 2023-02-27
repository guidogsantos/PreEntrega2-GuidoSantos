//Datos principales para conocer al usuario

let nombre = prompt("Ingrese su nombre");
console.log(nombre);

let apellido = prompt("Ingrese su apellido");
console.log(apellido);

let usuario = (nombre + " " +apellido);
console.log(usuario);

alert("Bienvenido " + usuario + " al simulador de cuentas");

let confirmacion = confirm("Al aceptar recopilaremos datos para encontrar la opcion que mas se adapte a tu perfil");
    if (confirmacion === true) {
        let salario;
        do {
            salario = prompt("Por favor, ingrese su salario neto");
            const num = parseInt(salario);
            if (isNaN(salario)) {
                alert("Por favor solo ingrese numeros");
            salario = null;
        }
        } while (salario === null);
        console.log(salario);

        let gastos;
        do {
            gastos = prompt("Ingrese un estimado de gastos mensuales, por ejemplo, Alquiler, Impuestos, Patente automor, etc...");
            const num = parseInt(gastos);
            if (isNaN(gastos)) {
                alert("Por favor solo ingrese numeros");
                gastos = null;
            }
        } while (gastos === null);
        console.log(gastos);

        function resta(salario, gastos) {
            return salario - gastos;
        }
        let total = resta(salario,gastos);
        console.log(total);

        class DatosUsuario {
            constructor(nombre,apellido,salario,gastos) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.salario = salario;
                this.gastos = gastos;
            }
        }
        const DatosUsuario1 = new DatosUsuario(nombre,apellido,salario,gastos);
        console.log(DatosUsuario1)
        
        const categorias = ["BASICA", "GOLD", "PLATINUM", "BLACK"]
        console.log(categorias)
        
        if (total < 10000) {
            alert("Felicitaciones " + usuario + " estas a un paso de tu cuenta BASICA")
            console.log(categorias[0])
            document.write("<h1> Felicitaciones " + usuario + " estas a un paso de tu cuenta <a style=color:Red;>BASICA</a> </h1>");
        } else if (total >= 10000 && total <=49999) {
            alert("Felicitaciones " + usuario + " estas a un paso de tu cuenta GOLD")
            console.log(categorias[1])
            document.write("<h1> Felicitaciones " + usuario + " estas a un paso de tu cuenta <a style=color:#E6C900;>GOLD</a> </h1>");
        } else if (total >= 50000 && total <=99999) {
            alert("Felicitaciones " + usuario + " estas a un paso de tu cuenta PLATINUM")
            console.log(categorias[2])
            document.write("<h1> Felicitaciones " + usuario + " estas a un paso de tu cuenta <a style=color:#0057A0;>PLATINUM</a></h1>");
        } else if (total > 10000) {
            alert("Felicitaciones " + usuario + " estas a un paso de tu cuenta BLACK")
            console.log(categorias[3])
            document.write("<h1> Felicitaciones " + usuario + " estas a un paso de tu cuenta <a style=color:#000000;>BLACK</a></h1>");
        }

    }
    else{
        alert(usuario + " Te esperamos en otra oportunidad!")
        document.write("<h1> ¡ "+ usuario + " Te esperamos en otra oportunidad!</h1>")
}