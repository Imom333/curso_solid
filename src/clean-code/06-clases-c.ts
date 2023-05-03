(() => {
    // SI aplicando el principio de responsabilidad única
    // Priorizar la composición frente a la herencia
    
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
        role: string
    }

    class User{
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ email, role }: UserProps){
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProps{
        workingDirectory: string;
        lastOpenFolfer: string;
    }

    class Settings{
        public workingDirectory: string;
        public lastOpenFolfer: string;

        constructor({
            workingDirectory,
            lastOpenFolfer
        }: SettingsProps){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolfer = lastOpenFolfer;
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

    class UserSettings{
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, genger, birthday,
            email, role,
            lastOpenFolfer, workingDirectory
        }: UserSettingsProps){
            this.person = new Person({ name, genger, birthday });
            this.user = new User({ email, role, });
            this.settings = new Settings({ lastOpenFolfer, workingDirectory });
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