"use strict";
class Student {
    markAttendance(isPresent) {
        if (isPresent) {
            console.log("student is present");
        }
        else {
            console.log("student is absent");
        }
    }
}
const s = new Student();
console.log(s.markAttendance(true));
