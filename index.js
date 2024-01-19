
const todoList = [
  {
    text: "Faire du sport",
    done: true,
    editMode: true,
  },

  {
    text: "Cours Selma",
    done: false,
    editMode: false,
  },

  {
    text: "Séance Cardio",
    done: true,
    editMode: false,
  },
];

    // Creer une fonction qui retourne la todoList

     const createEditMode = (todo, index) => {
       const li = document.createElement("li");
       const input = document.createElement("input");
       const btnCancel = document.createElement("button");
       const btnSave = document.createElement("button");
       input.type = "text";
       input.value = todo.text;
       btnCancel.innerHTML = "Cancel";
       btnSave.innerHTML = "Save";

       li.append(input, btnCancel, btnSave);
       btnCancel.addEventListener("click", (event)=>{
        event.stopPropagation();
        cancelingEdition(index);
       })

       btnSave.addEventListener("click", (event)=>{
        event.stopPropagation();
        saveToDoEdition(index,input);
       })
       return li;
     };

    const ul = document.querySelector("ul")
    const afficherToDoList = ()=>{
        const toDoNode = todoList.map((todo,index)=>{
            if(todo.editMode){
                return createEditMode(todo,index)
            }

            else{
                 return createToDoNode(todo,index)
            }
        
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
        const btnSupprimer = document.createElement("button");
        const btnEdit = document.createElement("button");
        btnSupprimer.innerHTML = 'Supprimer'
        btnEdit.innerHTML = "Editer";

        li.innerHTML = `
                <span class ="todo ${todo.done ? 'done': ''}"></span>
                <p>${todo.text}</p>
        `;
        btnSupprimer.addEventListener("click", (event) => {
          event.stopPropagation();
          supprimerTodo(index);
        });

        btnEdit.addEventListener("click", (event) => {
          event.stopPropagation();
          passToEditMode(index);
        });

        li.addEventListener("click", (event)=>{
            event.stopPropagation();
            toggleToDo(index);
            afficherToDoList();
        })

        li.append(btnEdit, btnSupprimer);
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


    const cancelingEdition = (index)=>{
        todoList[index].editMode = false;
        afficherToDoList();
    }

    const passToEditMode = (index)=>{
        todoList[index].editMode = !todoList[index].editMode;
        afficherToDoList();
    }

    const saveToDoEdition = (index,input)=>{
        const value = input.value;
        todoList[index].text = value;
        todoList[index].editMode = false;
        afficherToDoList()
    };