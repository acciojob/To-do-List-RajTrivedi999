document.getElementById("addTodoBtn").onClick = function() {

    var text = document.getElementById("newTodoInput").value;

    var li = "<li>" + text + "</li>";

    document.getElementById("todoList").appendChild(li);
}