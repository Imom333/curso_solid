(() => {
    // NO aplicando el principio de responsabilidad única
    type Genger = 'M' | 'F'

    interface PersonProps {
        name: string,
        genger: Genger,
        birthday: Date
    }

    class Person{
        public name: string;
        public genger: Genger;
        public birthday: Date;

        constructor({ name, genger, birthday }: PersonProps){
            this.name = name;
            this.genger = genger;
            this.birthday = birthday;
        }
    }

    interface UserProps {
        email: string,
        role: string,
        name: string,
        genger: Genger,
        birthday: Date
    }

    class User extends Person{
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor( { email, role, name, genger, birthday }: UserProps ){
            super({ name, genger, birthday });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps{
        workingDirectory: string;
        lastOpenFolfer: string;
        email: string;
        role: string;
        name: string;
        genger: Genger;
        birthday: Date;
    }

    class UserSettings extends User{
        public workingDirectory: string;
        public lastOpenFolfer: string;

        constructor({
            workingDirectory,
            lastOpenFolfer,
            email,
            role,
            name,
            genger,
            birthday
        }: UserSettingsProps){
            super({ email, role, name, genger, birthday });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolfer = lastOpenFolfer;
        }
    }
    
    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolfer: '/home',
        email: 'ivan@gamil.com',
        role: 'admin',
        name: 'Ivan',
        genger: 'M',
        birthday: new Date('2000-01-01')
    });
    
    console.log({ userSettings });
    
})();