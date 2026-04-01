"use strict";
class A {
}
class B extends A {
    outTime(time) {
        console.log("outtime=", time);
    }
    inTime(time) {
        console.log("intime =", time);
    }
}
const b = new B();
b.inTime(9);
b.outTime(5);
