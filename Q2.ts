class Emp {
  name: string = "anjali";
  id: number = 12;
  static cname: string = "sdac";
  static cadd: string = "borivali";

  static meth1(): string {
    return this.cname + " " + this.cadd;
  }
  meth2(): string {
    return this.name + " " + this.id;
  }
}
const emp = new Emp();
console.log(emp.meth2());
console.log(Emp.meth1());
