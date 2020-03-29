const handlers = {
  addTodo: function (){
    var todoText = document.getElementById("textBox");
    todoList.addTodo(todoText.value);
    todoText.value = "";
    view.displayTodos();
  },
  changeTodo: function (){
    var positionInput = document.getElementById("positionBox");
    var newTodo = document.getElementById("newTodoBox");
    todoList.changeTodo(positionInput.valueAsNumber, newTodo.value);
    newTodo.value = "";
    positionInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function (position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function (){
    var toggleCompletedPosition = document.getElementById("toggleCompleteBox");
    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
    toggleCompletedPosition.value = "";
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
};
