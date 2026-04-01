"use strict";
class Course {
    courseName;
    courseCode;
    instructor;
    constructor(courseName, courseCode, instuctor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instuctor;
    }
}
const c = new Course("java", 123, "xyz");
console.log(c);
