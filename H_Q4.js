"use strict";
class Person {
}
class Student extends Person {
    getDetails() {
        return "abc";
    }
    getRole() {
        return "xyz";
    }
}
const s = new Student();
console.log(s.getDetails());
console.log(s.getRole());
