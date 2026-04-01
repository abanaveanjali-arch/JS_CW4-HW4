abstract class Person {
  abstract getDetails(): string;
  abstract getRole(): string;
}
class Student extends Person {
  getDetails(): string {
    return "abc";
  }
  getRole(): string {
    return "xyz";
  }
}
const s = new Student();
console.log(s.getDetails());
console.log(s.getRole());
