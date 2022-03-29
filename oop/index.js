class Student {
    constructor(name,subjects,score) {
        this.name = name;
        this.subjects = subjects;
        this.score = score;        
    }

    sebutkanNama() {
        console.log(this.name);
    }
    sebutkanSubject(){
        console.log(this.subjects);
    }
}

// Proses instansiasi
let andi = new Student("andi",['math','english'],90);
console.log(andi);
andi.sebutkanNama();
andi.sebutkanSubject();