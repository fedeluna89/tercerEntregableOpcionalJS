let input1 = document.getElementById("nombre");

let input2 = document.getElementById("apellido");

let encabezado = document.getElementById("titulo");

let div = document.getElementById("texto");



input1.addEventListener("input", () => {
    if(nombre.value.length === 5){
        encabezado.className = "naranja";
    }else if(nombre.value.length === 7){
        encabezado.className = "rojo";
    }else{
        encabezado.className = "verde";
    }
    
});

div.className = "fondo";


let parrafoNuevo = document.createElement("P");
parrafoNuevo.innerHTML = "<p>parrafo agregado nuevo</p>";

document.body.append(parrafoNuevo);

parrafoNuevo.className = "fondo";

const respuestaClick = () => {
    alert("tus datos fueron recibidos");
}

let boton = document.getElementById("boton");

boton.addEventListener("click", respuestaClick);



