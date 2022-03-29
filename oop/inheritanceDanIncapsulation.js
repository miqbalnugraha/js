class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }

    set setName(name) {
        this._name = name;
    }
    set setAge(age) {
        this._age = age;
    }
}

class Programmer extends Person {
    constructor(name, age, skills) {
        super(name, age);
        this._skills = skills;
    }
    get skills() {
        return this._skills;
    }

    set setSkills(skills) {
        this._skills = skills;
    }

}

class Students extends Person {
    constructor(name, age, scores) {
        super(name, age);
        this._scores = scores;
    }
    get scores() {
        return this._scores;
    }

    set setSkills(scores) {
        this._scores = scores;
    }
}

let person = new Person('Andi', 25);
let programmer = new Programmer('Charlie', 22, ['js']);
let students = new Students('Doni', 18, [89]);

console.log(programmer.name);
console.log(students.age);