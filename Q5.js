"use strict";
class Teacher {
    displayStudinfo(grade) {
        console.log("student grade=", grade);
    }
}
const t = new Teacher();
console.log(t.displayStudinfo("A"));
