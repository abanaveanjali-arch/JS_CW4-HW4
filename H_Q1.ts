class Student {
  name: string;
  sid: number;
  grade: string;
  address: string;

  constructor(name: string, sid: number, grade: string, address:
     string) {
    this.name = name;
    this.sid = sid;
    this.grade = grade;
    this.address = address;
  }
  displayInfo(): string {
    return this.name + " " + this.sid + " " + this.grade + " " +
     this.address;
  }
}
const s = new Student("anjali", 12, "A", "borivali");
console.log(s.displayInfo());
