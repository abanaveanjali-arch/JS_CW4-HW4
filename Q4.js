"use strict";
class Emp {
}
class Manager extends Emp {
    getleaves(leave) {
        console.log("leaves=", leave);
    }
}
const m = new Manager();
console.log(m.getleaves(5));
