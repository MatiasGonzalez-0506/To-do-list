// import { initialTasks } from './array.js'
const taskList = document.querySelector("#taskList")
        const inputTask = document.querySelector("#inputTask")
        const addTask = document.querySelector("#addTask")
        const total = document.querySelector("#total")
        const complete = document.querySelector("#completed")
        let tasks = [
            {id: 1,task: 'agregar tareas con descripcion al llenar el input',state: false},
            {id: 2,task: 'borrar tareas al hacer click en borrar',state: false},
            {id: 3,task: 'incluir 3 tareas iniciales',state: false}]

        addTask.addEventListener("click", () => {
            if(inputTask.value ===""){
                alert("Debes agregar una tarea primero")
                return
            }
            else{
                const newTask = {id:Date.now() ,task:inputTask.value,state:false}
                tasks.push(newTask)
                inputTask.value = ""
                let html = ""
    
                for (let task of tasks){
                    html += `<li>${task.task} <button onclick="completed(${task.id})" class="finished">completada</button> <button onclick="Borrar(${task.id})" class="delete">Borrar</button></li>`;
                }
                taskList.innerHTML = html;
                console.log(tasks)
            }
        })
        function Borrar(id){
            const index = tasks.findIndex((ele) => ele.id == id)
            tasks.splice(index, 1)
            let html = ""
            for (task of tasks){
                html += `<li>${task.task} <button onclick="completed(${task.id})" id="${task.id}" class="finished">completada</button> <button onclick="Borrar(${task.id})" class="delete">Borrar</button></li>`;             
            }
            taskList.innerHTML = html;
            console.log(tasks)
        }
        const initialTask = function(){
            let html = ""
    
            for (let task of tasks){
                html += `<li>${task.task} <button onclick="completed(${task.id})" id="${task.id}" class="finished">completada</button> <button onclick="Borrar(${task.id})" class="delete">Borrar</button></li>`;
            }
            taskList.innerHTML = html;
            console.log("tasks")

        }
        const color = function(id){
            let color = "yellow"
            let okbutton = document.getElementById(id)
            okbutton.style.backgroundColor = color
            console.log(id)
            console.log(document.getElementById(id).style)
        }
        function completed(id){
            const index = tasks.findIndex((ele) => ele.id == id)
            let html = ""
            if(tasks[index].state === true){
                tasks[index].state = false
                color(id)
            }else{
                tasks[index].state = true
            }
            for (task of tasks){
                html += `<li>${task.task} <button onclick="completed(${task.id})" id="${task.id}" class="finished">completada</button> <button onclick="Borrar(${task.id})" class="delete">Borrar</button></li>`;             
            }
            taskList.innerHTML = html;
            console.log(tasks)
        }
        initialTask()