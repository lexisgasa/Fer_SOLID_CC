(()=>{

    type Gender = "M" | "F";

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    const newPerson = new Person("Alexis","M",new Date('1993-09-22'))
    console.log({newPerson})

})();
