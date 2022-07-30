const taskList = document.querySelector("")
const newTask = document.querySelector("")
const addTask = document.querySelector("")
const tasks = []









const listaDeInvitados = document.querySelector("#invitados")
const invitadoInput = document.querySelector("#nuevoInvitado")
const btnAgregar = document.querySelector("#agregarInvitado")
const invitados = []
btnAgregar.addEventListener("click", () => {
/* Agregamos el invitado al arreglo */
const nombreInvitado = invitadoInput.value
invitados.push(nombreInvitado)
invitadoInput.value = ""
/* Actualizamos la información en el HTML */
let html = ""
for (let invitado of invitados) {
html += `<li>${invitado}</li>`;
}
listaDeInvitados.innerHTML = html;
})