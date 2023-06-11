let draggedItem = null;

function drag(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text/plain", event.target.innerHTML);
  event.currentTarget.classList.add("dragged");
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const container = event.target;
  container.classList.remove("dragged");
  container.innerHTML = event.dataTransfer.getData("text/plain");
  draggedItem.parentNode.removeChild(draggedItem);
  draggedItem = null;
  alert("Item dropped successfully!");
}

function resetContainers() {
  const container1 = document.getElementById("container1");
  const container2 = document.getElementById("container2");
  container1.innerHTML = '<h2>Container 1</h2>' +
                          '<ul class="item-container">' +
                          '<li draggable="true" ondragstart="drag(event)">python</li>' +
                          '<li draggable="true" ondragstart="drag(event)">c</li>' +
                          '<li draggable="true" ondragstart="drag(event)">Ruby</li>' +
                          '<li draggable="true" ondragstart="drag(event)">Java</li>' +
                          '</ul>';
  container2.innerHTML = '<h2>Container 2</h2>';
  alert("Containers reset.");
}

function showMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.innerHTML = message;
  document.body.appendChild(messageElement);
  setTimeout(function() {
    document.body.removeChild(messageElement);
  }, 2000);
}
