class Student{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    study(){
        console.log(`${this.name} ${this.surname} is studying!`);
    }
}

const student1 = new Student("Name", "Surname", 21);
console.log(student1);
student1.study();