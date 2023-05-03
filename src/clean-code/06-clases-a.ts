(() => {
    
    type Genger = 'M' | 'F'
    class Person{
        // public name: string;
        // public genger: Genger;
        // public birthday: Date;

        // constructor(
        //     name: string,
        //     genger: Genger,
        //     birthday: Date
        // ){
        //     this.name = name;
        //     this.genger = genger;
        //     this.birthday = birthday;
        // }

        constructor(
            public name: string,
            public genger: Genger,
            public birthday: Date
        ){}
    }

    class User extends Person{
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            genger: Genger,
            birthday: Date
        ){
            super(name, genger, birthday);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }


    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolfer: string,
            email: string,
            role: string,
            name: string,
            genger: Genger,
            birthday: Date
        ){
            super(email, role, name, genger, birthday);
        }
    }
    
    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'ivan@gamil.com',
        'admin',
        'Ivan',
        'M',
        new Date('2000-01-01')
    );
    
    console.log({ userSettings });

    // const newPerson = new Person('Ivan', 'M', new Date('2000-01-01'));
    // console.log({ Person });
    
})();