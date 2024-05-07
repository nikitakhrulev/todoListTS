import { StateManager } from "./state";
import { UserCollector } from "./userCollector";
import { greeting } from "./notifications/notifications";
import { getUserId } from "../services/getUserTodos/getUserTodos";

export class Login {
    
    public preloader: HTMLElement;
    public authModal: HTMLElement;
    public pageContent: HTMLElement;
    public accountLogo: HTMLElement;
    public accountMenu: HTMLElement;
    

    constructor() {
        this.preloader = document.getElementById('preloader') as HTMLElement;
        this.pageContent = document.getElementById('page-content') as HTMLElement;
        this.accountLogo = document.querySelector('.header__menu') as HTMLElement;
        this.accountMenu = document.querySelector('.header__menu-content') as HTMLElement;
    }
    loginCheckState() {
        if (StateManager.authState) {
            getUserId(UserCollector.userCredentials)
            this.loginShowAccontLogo();
            this.removePreloader();
            this.loginShowPageContent();
            this.accountLogo.addEventListener('click', this.handleAccontMenu.bind(this))
            greeting(UserCollector.userCredentials.email)
        }
    }

    removePreloader() {
        this.preloader.classList.add('unactive');
    }
    loginShowPageContent() {
        this.pageContent.classList.remove('hidden');
    }
    loginShowAccontLogo() {
        this.accountLogo.classList.remove('hidden');
    }
    handleAccontMenu() {
        this.accountMenu.classList.toggle('hidden');
    }
}
