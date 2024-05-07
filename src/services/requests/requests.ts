import { notificationSuccess, notificationError } from '../../components/notifications/notifications'

export async function toggleTodoComplete(todoId: string, completed: boolean) {
    const todo = todoId;
    console.log(todo)
    const response = await fetch(`https://todo-list-8ae56-default-rtdb.europe-west1.firebasedatabase.app/todos/${todo}.json?auth=YOUR_FIREBASE_REST_API_KEY`, {
        method: 'PATCH',
        body: JSON.stringify({ completed: completed }),
        headers: {
            'Content-type': 'application/json',
        }
    })
    try {
        if (response.ok) {
            notificationSuccess('Status changed')
            console.log('Status changed succesfully');
        } else {
            notificationError('change status')
            console.log("Status isn't changed")
        }
    } catch (error) {
        console.error('an error:', error)
        notificationError('change status')
    }
};  

export async function deleteTodo(todoId: any) {
    const todo = todoId;
    console.log(todo)
    try {
        const response = await fetch(`https://todo-list-8ae56-default-rtdb.europe-west1.firebasedatabase.app/todos/${todo}.json?auth=YOUR_FIREBASE_REST_API_KEY`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            } 
        });
        if (response.ok) { 
            notificationSuccess('Todo deleted')
            console.log('Todo deleted successfully');
        } else {
            notificationError('delete')
            console.error('Failed to delete')
        }
    }
    catch (error) {
        console.error('An error occured:', error)
        notificationError('delete')
    }
};

export async function createTodo(todo: any) {
    const response = await fetch('https://todo-list-8ae56-default-rtdb.europe-west1.firebasedatabase.app/todos.json?auth=YOUR_FIREBASE_REST_API_KEY', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        }
    });
    try {
        if (response.ok) {
            console.log('New todo is created');
            notificationSuccess('New todo created')
            const newTodo = await response.json();
            console.log(newTodo)
            return newTodo;
        } else {
            notificationError('create new todo')
            console.log("Failed to create new todo")
        }
    } catch (error) {
        console.error('an error:', error)
        notificationError('create new todo')
    } 
};

export async function signUpNewUser(user: any) {
    const response = await fetch('https://todo-list-8ae56-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=YOUR_FIREBASE_REST_API_KEY', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json',
        }
    });
    try {
        if (response.ok) {
            console.log('New user is created');
            notificationSuccess('New user created')
            const newUser = await response.json();
            console.log(newUser)
        } else {
            notificationError('create new user')
            console.log("Failed to create new user")
        }
    } catch (error) {
        console.error('an error:', error)
        notificationError('create new user')
    } 
};
