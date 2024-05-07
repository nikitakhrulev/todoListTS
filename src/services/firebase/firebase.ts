import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { greeting } from "../../components/notifications/notifications";
import { Authorization } from "../../components/authorization/authorization";
import { getUserId } from "../getUserTodos/getUserTodos";
// import { AuthManager } from "../../components/startModals";
import { StateManager } from "../../components/state";
import { Logout } from "../../components/logout";
import { Login } from "../../components/login";
import { UserCollector } from "../../components/userCollector";

export class Firebase {
  firebaseConfig = {
    apiKey: "AIzaSyDdsbBHBhSCRH2buaMRQKBFOf_uUAN7rx0",
    authDomain: "todo-list-8ae56.firebaseapp.com",
    databaseURL: "https://todo-list-8ae56-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-list-8ae56",
    storageBucket: "todo-list-8ae56.appspot.com",
    messagingSenderId: "317700924219",
    appId: "1:317700924219:web:600b67c1c53e0db2be4d1e"
  };
  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  auth = getAuth(this.app);
  authorization = new Authorization();
  Logout = new Logout();
  Login = new Login();
  
  initAuth() {
    const signInForm = document.querySelector('.sign-in-form') as HTMLFormElement;
    signInForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const passwordInput = document.getElementById('password') as HTMLInputElement;
  
      if (emailInput && passwordInput) {
        const email = emailInput.value;
        const password = passwordInput.value;
      try {
        const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
        const user: any = userCredential.user;
        console.log(typeof user)
        if (user) {
          UserCollector.collectUserCredentials(user);
          StateManager.userLoggedIn();
          this.Login.loginCheckState();
        }
      } catch (error) {
        console.error('Error signing in:', error.message);
      }
    }
    });
  }
  initSignUp() {
    const signUpForm = document.querySelector('.sign-up-form') as HTMLFormElement;
    signUpForm.addEventListener('submit', async(e) => {
      e.preventDefault();

      const emailInputSU = document.getElementById('emailSU') as HTMLInputElement;
      const passwordInputSU = document.getElementById('passwordSU') as HTMLInputElement;
      const repeatPasswordSU = document.getElementById('passwordSU1') as HTMLInputElement;

      if (emailInputSU && passwordInputSU && repeatPasswordSU) {
        const email = emailInputSU.value;
        const password = passwordInputSU.value;
        const repPassword = repeatPasswordSU.value;

        try {
          const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
          const user = userCredential.user;
          if (user) {
            this.authorization.getIDs();
          }

        } catch (error) {
          
        }
      }
    })
  }
  resetPassword() {
    const resetPasswordForm = document.querySelector('.reset-password-form') as HTMLFormElement;

    resetPasswordForm.addEventListener('submit', async(e) => {
      e.preventDefault()

      const emailForResetField = document.getElementById('reset-password-input') as HTMLInputElement;

      const emailForReset = emailForResetField.value;

      try {
        await sendPasswordResetEmail(this.auth, emailForReset);
        console.log('An email for reset was sent')
      } catch (error) {
        console.log('An error occured:', error.message);
      }
    })
  }
  logout() {
    const logoutButton = document.getElementById('logoutBtn') as HTMLElement;

    logoutButton.addEventListener('click', async () => {
      try {
        await this.auth.signOut();
        StateManager.userLoggedOut();
        this.Logout.logoutCheckState();
      } catch (error) {
        console.log('an error occured', error);
      }
    })
  }
}

        

