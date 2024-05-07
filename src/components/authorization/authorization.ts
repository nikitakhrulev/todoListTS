import { users } from "../../../app";
import { signUpNewUser } from "../../services/requests/requests";
import { todoList } from "../../services/handleTodo/handleTodo";
import { StateManager } from "../state";
import { getAuth } from "firebase/auth";



export class Authorization {

    public preloader: HTMLElement;
    public authBtn: HTMLElement;
    public authModal: HTMLElement;
    public currentUserField: HTMLElement;
    public newUserPassword: HTMLInputElement;
    public newUserEmail: HTMLInputElement;
    public identificators: object;
    public logoutBtn: HTMLElement;
    

    constructor() {
        this.preloader = document.getElementById('preloader') as HTMLElement;
        this.authBtn = document.querySelector('.auth__button') as HTMLElement;
        this.authModal = document.getElementById('authModal') as HTMLElement;
        this.currentUserField = document.getElementById('currentUser') as HTMLElement;
        this.newUserEmail = document.getElementById('emailSU') as HTMLInputElement;

        this.authBtn.addEventListener('click', this.addPreloader.bind(this));
        // this.logoutBtn.addEventListener('click', this.logout.bind(this))
    }
    addPreloader() {
        this.preloader.classList.remove('unactive');
        this.authModal.classList.add('hidden');
    }
    getIDs() {
        const identificators = {
            id: users.length + 1,
            email: this.newUserEmail.value,
            password: this.newUserPassword.value
        };
        signUpNewUser(identificators);
    }
}


