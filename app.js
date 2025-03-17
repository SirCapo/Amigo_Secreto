// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración de array
let amigos = [];

//Función para agregar amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();  


    //Validar que el campo no esté vacío
    if (nombreAmigo==""){
        alert("Por favor, ingrese un nombre válido");
        return;
    }

    //Validar que el nombre no se repita
    if (amigos.includes(nombreAmigo)){
        alert('El nombre ${nombreAmigo} ya está en la lista');
        return;
    }

    //Agregar nombre a array
    amigos.push(nombreAmigo);

    //Limpiar campo entrada
    inputAmigo.value = "";
    
    //Actualizar lista en el HTML
    actualizarLista();

}

//Función para actualizar lista de amigos en interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar contenido actual de la lista
    listaAmigos.innerHTML = "";

    //Recorrer el array con un ciclo for
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Función para seleccionar amigo
function sortearAmigo(){
    if(amigos.length == 0){
        alert('No hay amigos disponibles para hacer el sorteo. Agrega al menos uno');
        return;
    }

    //Genera un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}
