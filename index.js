
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
        const toDoNode = todoList.map((todo)=>{
            return createToDoNode(todo)
        
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

    const createToDoNode = (todo)=>{

        const nodeElements = document.createElement("li");
        nodeElements.innerHTML = `

                <span class ="todo ${todo.done ? 'done': ''}"></span>
                <p>${todo.text}</p>
                <button>Editer</button>
                <button>Supprimer</button>
        `;

        return nodeElements;
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

        //console.log(todoList)
        event.target[0].value = "";
        afficherToDoList()
    })