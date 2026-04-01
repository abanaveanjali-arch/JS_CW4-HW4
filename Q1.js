"use strict";
class Emp {
    name;
    id;
    salary;
    address;
    constructor(name, id, salary, address) {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.address = address;
    }
    displayInfo() {
        return this.name + " " + this.id + " " +
            this.salary + " " + this.address;
    }
}
const emp = new Emp("anjali", 12, 12300, "borivali");
console.log(emp.displayInfo());
