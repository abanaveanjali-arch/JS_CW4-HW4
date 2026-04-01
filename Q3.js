"use strict";
class School {
    studentName;
    sid;
    subject;
    constructor(studentName, sid, subject) {
        this.studentName = studentName;
        this.sid = sid;
        this.subject = subject;
    }
    displaySchoolInfo() {
        return this.studentName + " " + this.sid + " " + this.subject;
    }
}
const s = new School("Anjali", 23, "java");
console.log(s.displaySchoolInfo());
