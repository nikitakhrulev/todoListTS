import { StateManager } from "./state";
const stateManager = new StateManager;

class AuthManager {
    public accountLogo: HTMLElement | null;
    public accountMenu: HTMLElement | null;
    public goToSignUp: HTMLElement | null;
    public goToSignIn: HTMLElement | null;
    public signInModal: HTMLElement | null;
    public signUpModal: HTMLElement | null;
    public resetPasswordForm: HTMLElement | null;
    public goToResetForm: HTMLElement | null;
    public resetPassword: HTMLFormElement | null;
    public logoutBtn: HTMLElement | null;
    public authSuccess: boolean;


    constructor() {
        // this.accountLogo = document.querySelector('.header__menu');
        // this.accountMenu = document.querySelector('.header__menu-content');
        this.goToSignUp = document.getElementById('goToSignUpBtn');
        this.goToSignIn = document.getElementById('goToSignInBtn');
        this.signInModal = document.getElementById('authModal');
        // this.signUpModal = document.getElementById('signUpModal');
        this.resetPasswordForm = document.getElementById('resetPassword');
        this.goToResetForm = document.querySelector('.forgot');
        this.resetPassword = document.querySelector('.reset-password-form');
        // this.logoutBtn = document.getElementById('logoutBtn');
        this.authSuccess = false;

        if (this.accountLogo && this.accountMenu && this.goToSignUp && this.goToSignIn && this.signInModal && this.signUpModal && this.resetPasswordForm && this.goToResetForm) {
            this.initEventListeners();
        }
    }
    public initEventListeners() {
        this.goToSignIn.addEventListener('click', (e) => this.toggleSignInSignUp(e));
        this.goToSignUp.addEventListener('click', (e) => this.toggleSignInSignUp(e));
        this.accountLogo.addEventListener('click', () => this.toggleAccountMenu());
        this.goToResetForm.addEventListener('click', () => this.toggleResetPassword());
        this.resetPassword.addEventListener('submit', () => this.passwordResetEmailSent())
        // this.logoutBtn.addEventListener('click', () => this.logout());
    }

    public toggleSignInSignUp(e: Event) {
        e.preventDefault();
        this.signInModal.classList.toggle('hidden');
        this.signUpModal.classList.toggle('hidden');
        console.log('click')
    }

   public toggleAccountMenu() {
        this.accountMenu!.classList.toggle('hidden');
    }

    public toggleResetPassword() {
        this.signInModal!.classList.toggle('hidden');
        this.resetPasswordForm!.classList.toggle('hidden');
        console.log('click');
    }

    public showAccountLogo() {
        this.accountLogo!.classList.toggle('hidden');
    }
    public passwordResetEmailSent() {
        this.resetPasswordForm.classList.toggle('hidden');
        this.signInModal.classList.toggle('hidden');
    }
    // public logout() {
    //     this.accountLogo.classList.toggle('hidden');
    //     this.signInModal.classList.toggle('hidden');
    // }
}

export { AuthManager };

