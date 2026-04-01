"use strict";
class Emp {
    name = "anjali";
    id = 12;
    static cname = "sdac";
    static cadd = "borivali";
    static meth1() {
        return this.cname + " " + this.cadd;
    }
    meth2() {
        return this.name + " " + this.id;
    }
}
const emp = new Emp();
console.log(emp.meth2());
console.log(Emp.meth1());
