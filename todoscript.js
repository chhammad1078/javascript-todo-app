
      let inputitem = document.getElementById("todoInput");
      let addButton = document.getElementById("addTodoButton");
      let todoList = document.getElementById("todoList");
      addTodoItem = (item) => {
        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.justifyContent = "space-between";
        container.style.margin = "5px";
        container.style.padding = "0px 10px";
        container.style.alignItems = "center";
        container.style.border="1px solid black";
        container.style.borderRadius="10px";

        let para = document.createElement("p");
        para.textContent = item;

        let deleteButton = document.createElement("button");
        deleteButton.textContent="Delete";

        deleteButton.addEventListener("click", ()=>{
            if(confirm("Are you sure you want to delete this item?")){
                container.remove();
            }
        })
        container.appendChild(para);
        container.appendChild(deleteButton);
        todoList.appendChild(container);
        inputitem.value = "";
      };

      addButton.addEventListener("click", () => {
        addTodoItem(inputitem.value);
      });

    