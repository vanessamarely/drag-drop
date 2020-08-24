let draggedItem = null;
function dragItem(){
    const taskList = document.querySelectorAll(".task");
    taskList.forEach( task => {
        task.setAttribute("draggable", "true");
        task.addEventListener("dragstart", (event) => {
            draggedItem = task;
            setTimeout(() => {
                task.style.display = "none";
            }, 0);
        });
        task.addEventListener("dragend", (event) => {
            draggedItem.style.display = "block";
            draggedItem = null;
       });
    });
}

function dropZone(){
    const drop= document.querySelector(".drop-zone");
    drop.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
    drop.addEventListener("dragenter", (event) => {
        event.preventDefault();
    });
    drop.addEventListener("drop", (event) => {
        event.preventDefault();
        drop.appendChild(draggedItem);
   })
}

dragItem();
dropZone();