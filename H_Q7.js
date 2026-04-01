"use strict";
class Institude {
}
class School extends Institude {
    addStudent() {
        console.log("add student");
    }
    removeStudent() {
        console.log("remove student");
    }
    getInstitudeType() {
        console.log("abstract class Method");
    }
}
const s = new School();
console.log(s.addStudent());
console.log(s.removeStudent());
console.log(s.getInstitudeType());
