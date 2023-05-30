(()=>{

// aplicando el principio de responsabilidad unica
// priorizando la composicion a la herencia
    
    type Gender = "M" | "F";

    interface PersonProperties {
         name: string;
         gender: Gender;
         birthdate: Date;
    } 

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate}: PersonProperties ){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProperties {
        email: string;
        role: string;
        name : string;
        gender: Gender;
        birthdate: Date;
    }

    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ email, role, name, gender, birthdate}: UserProperties) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
        checkCredentials(){
            return true;
        }
    }

  

    interface UserSettingsProperties {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory, lastOpenFolder,email,role, name, gender, birthdate}:UserSettingsProperties) {
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings ({
        workingDirectory: "user/home",
        lastOpenFolder: "/home",
        email: "lexisgasa@google.com",
        role: "Admin",
        name: "Alexis",
        gender: "M",
        birthdate: new Date(1993-09-22)
})

    console.log(userSettings);


})();
