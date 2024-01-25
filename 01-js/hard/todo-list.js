/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

let todos = [];

class Todo {

  Todo (){
    todos = [];
  }

  add (todo){
    todos.push(todo);
  }

  remove (indexOfTodo){
    if(indexOfTodo < todos.length)
    todos.splice(indexOfTodo , 1);
  }

  update (index, updatedTodo){

    if (index < todos.length)
    todos [index] = updatedTodo;

  }

  getAll (){
    return todos;
  }

  get (indexOfTodo){

    let res = todos[indexOfTodo];

    if (res != undefined)
      return res;
    
    return null;
  }

  clear (){
    todos = [];
  }
}

// let obj = new Todo();
// obj.add("new task 1");
// obj.add("new task 2");
// obj.add("new task 1");
// obj.add("new task 3");
// console.log(obj.getAll());

module.exports = Todo;
