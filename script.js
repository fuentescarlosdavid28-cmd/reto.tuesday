const estudiantes = [ 
{ id: 1, nombre: 'Ana', edad: 20 }, 
{ id: 2, nombre: 'Juan', edad: 22 }, 
{ id: 3, nombre: 'María', edad: 21 }, 
]; 

async function saludar() {
   return "holis,  soy:  " + estudiantes[1].nombre + " ;"
}

console.log(estudiantes[1].nombre); 
saludar().then((v) => console.log(v));