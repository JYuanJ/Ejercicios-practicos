// Objetos
// Los objetos son parte fundamental de la programación en javascr:
const nombreProducto = "Monitor de 20 pulgadas"
const precio = 500000;
const disponible = true
// podemos crear un objeto que agrupe las características de esta información y trabajarlo invocando dicho objeto
const producto = {
    nombre:"Monitor de 20 pulgadas",
    precio: 500000,
    disponible: true,

}

// Como acceder a las prpiedades de un objetos
console.log(producto);
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto['disponible']);

// agregar elementos a un objeto
producto.imagen ="imagen.jpg"
delete producto.nombre;
//console.log(producto);
producto.nombre = "Monitor de 20 pulgadas"
console.log(producto);

// Desestructurar un objeto
// sacar elementos especificos de un objeto
const {nombre,precio1} =producto


const lamborghini = {
    color: "Rojo",
    torque: "1600",
    cF: "1500",
    aceleracion: "5 segundos de 0 a 100",
}

console.log(lamborghini);

delete lamborghini.aceleracion;

console.log(lamborghini);

lamborghini.aceleracion = "De 0 a 100 km/h en 5 segundos";

console.log(lamborghini);