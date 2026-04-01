class Emp {
  name: string;
  id: number;
  salary: number;
  address: string;

  constructor(name: string, id: number, salary: number,
     address: string) {
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.address = address;
  }
  displayInfo(): string {
    return this.name + " " + this.id + " " +
     this.salary + " " + this.address;
  }
}
const emp = new Emp("anjali", 12, 12300, "borivali");
console.log(emp.displayInfo());
