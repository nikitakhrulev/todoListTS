import { Firebase } from './src/services/firebase/firebase';


document.addEventListener('DOMContentLoaded', initApp);



var fb = new Firebase();
fb.initAuth();

async function getAllTodos() {
    const response = await fetch('https://todo-list-8ae56-default-rtdb.europe-west1.firebasedatabase.app/todos.json?auth=YOUR_FIREBASE_REST_API_KEY');
    const data = await response.json();
    const result = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
    return result;
}
async function getAllUsers() {
    const response = await fetch('https://todo-list-8ae56-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=YOUR_FIREBASE_REST_API_KEY');
    const data = await response.json();
    const result = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
    return result;
}
import { Todo, User } from './src/types/types';

let todos: Todo[];
let users: User[];

async function initApp() {
    const [todosData, usersData] = await Promise.all([getAllTodos(), getAllUsers()]);
    todos = todosData;
    users = usersData;
} 

export {todos, users}