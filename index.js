
const todoList = [
  {
    text: "Faire du sport",
    done: true,
  },

  {
    text: "Cours Selma",
    done: false,
  },

  {
    text: "Séance Cardio",
    done: true,
  }
];

    // Creer une fonction qui retourne la todoList

    const ul = document.querySelector("ul")
    const afficherToDoList = ()=>{
        const toDoNode = todoList.map((todo,index)=>{
            return createToDoNode(todo,index)
        
        })

        ul.innerHTML = '';
        // ul.append(toDoNode[0], toDoNode[1], toDoNode[2])
        // for(let i=0 ; i<toDoNode.length; i++){
        //     ul.appendChild(toDoNode[i])
        // }

        toDoNode.forEach(element => {
            ul.append(element);
        });
    }

    const createToDoNode = (todo,index)=>{

        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerHTML = 'Supprimer'
        li.innerHTML = `
                <span class ="todo ${todo.done ? 'done': ''}"></span>
                <p>${todo.text}</p>
                <button>Editer</button>
        `;
        li.appendChild(button)
        button.addEventListener("click",(event)=>{
            supprimerTodo(index)
        })

        li.addEventListener("click", (event)=>{
            toggleToDo(index);
            afficherToDoList();
        })
        return li;
    }

    //console.log(createToDoNode(todoList));
    afficherToDoList();

    // todoList.push({text:"Faire mon Cv", done: true})
    // console.log(todoList)

    const form = document.querySelector("form");
    console.log(form);
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        //console.log(event.target[0].value)
        const text = event.target[0].value;
        todoList.push({
            text: text,
            done: false
        })

        event.target[0].value = "";
        afficherToDoList()
    })

    const supprimerTodo = (index)=>{
        todoList.splice(index,1);
        afficherToDoList();
        // console.log(todoList)
        // console.log(index)
    }

    const toggleToDo = (index) =>{
        todoList[index].done = !todoList[index].done
    }