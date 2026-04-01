"use strict";
class Student {
    name;
    sid;
    grade;
    address;
    constructor(name, sid, grade, address) {
        this.name = name;
        this.sid = sid;
        this.grade = grade;
        this.address = address;
    }
    displayInfo() {
        return this.name + " " + this.sid + " " + this.grade + " " +
            this.address;
    }
}
const s = new Student("anjali", 12, "A", "borivali");
console.log(s.displayInfo());
