(()=>{


    // no aplicando el principio de responsabilidad unica quedaria algo asi

    type Gender = "M" | "F";

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name : string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }
        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate)
        }
    }
  
    const userSettings = new UserSettings (
        "user/home",
        "/home",
        "lexisgasa@google.com",
        "Admin",
        "Alexis",
        "M",
        new Date(1993-09-22)
    )

    console.log(userSettings);

    const newPerson = new Person("Alexis","M",new Date('1993-09-22'))
    console.log({newPerson})

})();
