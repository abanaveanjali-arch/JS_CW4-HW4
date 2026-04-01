interface Attendance{
    markAttendance(isPresent:boolean):void;
}
class Student implements Attendance{
    markAttendance(isPresent:boolean): void {
        if (isPresent) {
            console.log("student is present");
        } else {
            console.log("student is absent");
        }
    }
}
const s=new Student();
console.log(s.markAttendance(true));