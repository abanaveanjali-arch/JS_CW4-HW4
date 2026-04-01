class Course {
  courseName: string;
  courseCode: number;
  instructor: string;

  constructor(courseName: string, courseCode: number,
     instuctor: string) {
    this.courseName = courseName;
    this.courseCode = courseCode;
    this.instructor = instuctor;
  }
}
const c = new Course("java", 123, "xyz");
console.log(c);
