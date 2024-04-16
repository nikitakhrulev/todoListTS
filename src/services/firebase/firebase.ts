import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
          console.log('User signed in:', user);
          console.log(typeof user)
        }
      } catch (error) {
        console.error('Error signing in:', error.message);
      }
    }
    });
  }
  
}

        

