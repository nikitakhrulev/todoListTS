class StateManager {
    static authState: boolean = false;

    static getAuthState(): boolean {
        return StateManager.authState;
    }

    static userLoggedIn() {
        StateManager.authState = true;
    }

    static userLoggedOut() {
        StateManager.authState = false;
    }
}

export { StateManager }
