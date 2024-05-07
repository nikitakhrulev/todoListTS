import { TodoTS } from "../handleTodo/handleTodo";
import { todos } from "../../../app";
import { users } from "../../../app";
import { User } from "firebase/auth";
import { UserCollector } from "../../components/userCollector";

let userNumber: number;
export function getUserId(userData: any) {
    console.log(typeof userData)
    const current = userData.email;
    console.log(typeof userData.email)
    console.log('User signed in:', current)
    const result = users.find(el => el.email === current);
    if (result) {
        const resultID = result.id;
        console.log(typeof result.id)
        userNumber = result.id;
        console.log(resultID)
        console.log(userNumber)
        printTodo(resultID);
    }
}

export function printTodo(resultID: number) {
    const todosToPrint = todos.filter(el => el.userId === resultID);
    todosToPrint.forEach(el => {
        const todoItem = new TodoTS(el.id, el.userId, el.title, el.completed);
        todoItem.createTodoHTML()
    })
}

export {userNumber}