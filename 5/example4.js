function addTask() {
    const inputElement = document.getElementById("taskInput");
    const input = inputElement.value;
    if (input === "") {
        return;
    }
    let listItemElement = document.createElement("li");
    /** <li> Core Java Programming <button onclick=deleteTask(this)>X</button>**/
    listItemElement.innerHTML = `${input} <button onclick="deleteTask(this)">X</button>`;

    const unorderedListElement = document.getElementById("taskList");
    unorderedListElement.appendChild(listItemElement);
    inputElement.value = '';
}

function deleteTask(btn) {
    btn.parentElement.remove();
}