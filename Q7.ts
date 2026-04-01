interface i {
  inTime(time: number): void;
}
abstract class A {
  abstract outTime(time: number): void;
}
class B extends A implements i {
  outTime(time: number): void {
    console.log("outtime=", time);
  }
  inTime(time: number): void {
    console.log("intime =", time);
  }
}
const b = new B();
b.inTime(9);
b.outTime(5);
