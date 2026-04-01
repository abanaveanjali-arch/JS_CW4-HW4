abstract class Institude {
  abstract getInstitudeType(): void;
}
interface Management {
  addStudent(): void;
  removeStudent(): void;
}
class School extends Institude implements Management {
  addStudent(): void {
    console.log("add student");
  }
  removeStudent(): void {
    console.log("remove student");
  }
  getInstitudeType(): void {
    console.log("abstract class Method");
  }
}
const s = new School();
console.log(s.addStudent());
console.log(s.removeStudent());
console.log(s.getInstitudeType());
