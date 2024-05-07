export class UserCollector {
    static userCredentials: any;

    static collectUserCredentials(credentials: any) {
        UserCollector.userCredentials = credentials;
    }
}

