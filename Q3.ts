class School {
  studentName: string;
  sid: number;
  subject: string;

  constructor(studentName: string, sid: number, subject: string) {
    this.studentName = studentName;
    this.sid = sid;
    this.subject = subject;
  }
  displaySchoolInfo(): string {
    return this.studentName + " " + this.sid + " " + this.subject;
  }
}
const s = new School("Anjali", 23, "java");
console.log(s.displaySchoolInfo());
