import { TodoTS } from "../handleTodo/handleTodo";
import { todos } from "../../../app";
import { users } from "../../../app";
import { Todo, User } from "../../types/types";

let userNumber: number;
export function getUserId(user: User) {
    console.log(typeof user)
    const current = user.email;
    console.log(typeof user.email)
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