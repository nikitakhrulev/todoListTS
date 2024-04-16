import { deleteTodo, toggleTodoComplete } from "../requests/requests";
import { todos } from "../../../app";


const todoList = document.getElementById('todo-list') as HTMLElement;
const todoInput = document.getElementById('todo-input') as HTMLInputElement;


export class TodoTS {
    public id: number;
    public userId: number;
    public title: string;
    public completed: boolean;
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
       
        const close = li.querySelector('.remove') as HTMLElement;
        close.addEventListener('click', this.deleteTodo.bind(this))
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
    public deleteTodo() {}
}
