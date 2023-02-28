let btn=document.getElementById("addTodoBtn")
btn.addEventListener('click',addList)

function addList() {
	if(document.getElementById("newTodoInput").value!=""){
		let newListElement=document.createElement("li")
		newListElement.innerText=document.getElementById("newTodoInput").value
		todoList.appendChild(newListElement)
	}
	else{
		alert("add some Text")
	}
	document.getElementById("newTodoInput").value=""
}