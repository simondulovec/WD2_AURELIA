export class Cykly{

constructor(){
this.students=[];
this.students.push("Janko");
this.students.push("Ferko");
this.students.push("Anicka");
this.newStudent="";
}

addStudent(){
this.students.push(this.newStudent);
this.newStudent="";
}

removeStudent(name){
this.students.splice(this.students.indexOf(name),1);
}

}
