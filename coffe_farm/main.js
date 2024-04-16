 // declaración de objetos
 class Gestor{
    constructor(nombre, edad, id){
        this.nombre=nombre;
        this.edad=edad;
        this.id=id;
    }
}
const gestor1= new Gestor("Juan", 39, 20835);
const gestor2= new Gestor("Laura", 29, 20835);
const gestor3= new Gestor("Martín", 27, 20835);

class Cliente{
    constructor(nombre,localidad){
        this.nombre=nombre;
        this.localidad=localidad;
    }
}
const cliente1=new Cliente("Mónica", "Barcelona");
const cliente2=new Cliente("Alba", "Sevilla");
const cliente3=new Cliente("Marcos", "Valencia");

class Mensaje{
    constructor(mensaje){
        this.mensaje=mensaje;
    }
}
const mensaje1=new Mensaje("Tienes una llamada perdida");
const mensaje2=new Mensaje("¿Hola, cómo estás?");
const mensaje3=new Mensaje("¡Que tengas un buen día!");

class Transferencia{
    constructor(remitente, destinatario, cantidad){
        this.remitente=remitente;
        this.destinatario=destinatario;
        this.cantidad=cantidad;
    }
}
const trans1=new Transferencia("Juan.P", "Alba.S", 500);
const trans2=new Transferencia("Juan.P", "Alba.S", 500);
const trans3=new Transferencia("Juan.P", "Alba.S", 500);

//almacenamiento en array
const gestores = [];
const clientes = [];
const mensajes = [];
const transferencias = [];

gestores.push(new Gestor("Juan", 39, 20835));
gestores.push(new Gestor("Laura", 29, 20835));
gestores.push(new Gestor("Martín", 27, 20835));

clientes.push(new Cliente("Mónica", "Barcelona"));
clientes.push(new Cliente("Alba", "Sevilla"));
clientes.push(new Cliente("Marcos", "Valencia"));

mensajes.push(new Mensaje("Tienes una llamada perdida"));
mensajes.push(new Mensaje("¿Hola, cómo estás?"));
mensajes.push(new Mensaje("¡Que tengas un buen día!"));

transferencias.push(new Transferencia("Juan.P", "Alba.S", 500));
transferencias.push(new Transferencia("Juan.P", "Alba.S", 500));
transferencias.push(new Transferencia("Juan.P", "Alba.S", 500));

// mostrar las propiedades de los arrays
// console.log(gestores);
// console.log(clientes);
// console.log(mensajes);
// console.log(transferencias);

// CONVERSIÓN A JSON
gestoresJson=JSON.stringify(gestores);
clientesJson=JSON.stringify(clientes);
mensajesJson=JSON.stringify(mensajes);
transferenciasJson=JSON.stringify(transferencias);


console.log(gestoresJson);
console.log(clientesJson);
console.log(mensajesJson);
console.log(transferenciasJson);

// CONVERSIÓN EN ARRAY

console.log(JSON.parse(gestoresJson));
console.log(JSON.parse(clientesJson));
console.log(JSON.parse(mensajesJson));
console.log(JSON.parse(transferenciasJson));