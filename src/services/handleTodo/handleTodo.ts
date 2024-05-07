import { deleteTodo, toggleTodoComplete } from "../requests/requests";
import { todos } from "../../../app";


const todoList = document.getElementById('todo-list') as HTMLElement;
const todoInput = document.getElementById('todo-input') as HTMLInputElement;


export class TodoTS {
    public id: number;
    public userId: number;
    public title: string;
    public completed: boolean;
    parentElement: any;
    constructor(id: number, userId: number,title: string,  completed: boolean) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.completed = completed;
    }

    public createTodoHTML() {
        const li = document.createElement('li');
        li.dataset.id = String(this.id);
        li.innerHTML = `<div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"> ${this.title} <span class="input-helper"></span></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>`;
        const status = li.querySelector('.checkbox') as HTMLInputElement;
        status.checked = this.completed;
        status.addEventListener('click', this.statusChange.bind(this));
       
        const close = li.querySelector('.remove') as HTMLElement;
        close.addEventListener('click', this.deleteHTMLTodo.bind(this))
        todoList.append(li)
        todoInput.value = '';
        console.log(li, todoList)
    }
    public statusChange(this: TodoTS, event: Event) {
        const status = event.target as HTMLInputElement;
        const parentLi = status.closest('li') as HTMLElement;
        const todoId = parentLi.dataset.id;
        const completed = status.checked;
        this.completed = completed;
        toggleTodoComplete(todoId, completed)
    }
    public deleteHTMLTodo() {
        const todoId = (event.target as HTMLElement).parentElement?.dataset.id;  
        console.log(todoId)
        

        if (deleteTodo(todoId)) {
            this.removeTodoFromList(todoId)
        }
    }
    public removeTodoFromList(todoId: any) {
        todos.filter(el => parseInt(String(el.id)) !== parseInt(todoId));
        console.log(todos)
        const todo = document.querySelector(`[data-id='${todoId}']`)
        console.log(todo)
        todo.remove(); 
    }
}


import { userNumber } from "../getUserTodos/getUserTodos";
import { createTodo } from "../requests/requests";

// const todoInput = document.querySelector('.todo-list-input') as HTMLInputElement;
const todoForm = document.querySelector('.add-items');


todoForm.addEventListener('submit', handleSubmit);

async function handleSubmit(evt: Event) {
    evt.preventDefault();


    const newTodoData = {
        title: todoInput.value,
        userId: userNumber,
        completed: false,
    };
    const newTodoName = await createTodo(newTodoData);
    if (newTodoName?.name) {
        const newTodo = {title: newTodoData.title, userId: newTodoData.userId, completed:newTodoData.completed, id:newTodoName.name};
        const todoInstance = new TodoTS(newTodo.id, newTodo.userId, newTodo.title, newTodo.completed)
        todoInstance.createTodoHTML();
    }
   
}

export {todoList}