// import { userNumber } from "./getUserTodos/getUserTodos";
// import { TodoTS } from "./handleTodo/handleTodo";
// import { createTodo } from "./requests/requests";

// const todoInput = document.querySelector('.todo-list-input') as HTMLInputElement;
// const todoForm = document.querySelector('.add-items');


// todoForm.addEventListener('submit', handleSubmit);

// async function handleSubmit(evt: Event) {
//     evt.preventDefault();


//     const newTodoData = {
//         title: todoInput.value,
//         userId: userNumber,
//         completed: false,
//     };
//     const newTodoName = await createTodo(newTodoData);
//     if (newTodoName?.name) {
//         const newTodo = {title: newTodoData.title, userId: newTodoData.userId, completed:newTodoData.completed, id:newTodoName.name};
//         const todoInstance = new TodoTS(newTodo.id, newTodo.userId, newTodo.title, newTodo.completed)
//         todoInstance.createTodoHTML();
//     }
   
// }