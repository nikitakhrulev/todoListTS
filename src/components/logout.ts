import { todoList } from "../services/handleTodo/handleTodo";
import { StateManager } from "./state";



export class Logout {

    public pageContent: HTMLElement;
    public accountLogo: HTMLElement;
    public signInModal: HTMLElement;


    constructor() {
        this.pageContent = document.getElementById('page-content');
        this.accountLogo = document.querySelector('.header__menu');
        this.signInModal = document.getElementById('authModal');
    }
    
    logoutCheckState() {
        if (!StateManager.authState) {
            this.logoutRemovePageContent();
            this.logoutRemoveTodoList();
            this.logoutSwapContent();
        }
    }

    logoutRemovePageContent() {
        this.pageContent.classList.add('hidden');
    }
    logoutRemoveTodoList() {
        todoList.innerHTML = '';
    }
    logoutSwapContent() {
        this.accountLogo.classList.add('hidden');
        this.signInModal.classList.remove('hidden');
    }
}