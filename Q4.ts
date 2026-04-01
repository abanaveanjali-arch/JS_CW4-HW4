abstract class Emp {
  abstract getleaves(leave: number): void;
}
class Manager extends Emp {
  getleaves(leave: number): void {
    console.log("leaves=", leave);
  }
}
const m = new Manager();
console.log(m.getleaves(5));
