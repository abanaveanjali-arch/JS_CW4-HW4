interface Student {
  displayStudinfo(grade: string): void;
}
class Teacher implements Student {
  displayStudinfo(grade: string): void {
    console.log("student grade=", grade);
  }
}
const t = new Teacher();
console.log(t.displayStudinfo("A"));
