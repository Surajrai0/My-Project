// index.js
function EmployeeInfo(Name, Salary) {
    console.log("Welcome " + Name + ", Your salary is " + Salary);
}
console.log("This is my first try");
var Empname = "john";
var EmpSalary = 5000;
EmployeeInfo(Empname, EmpSalary);

var EmpSkills = (skills) => {
    console.log("big expert in " + skills);
};
EmpSkills("Java");

// Importing modules
const student = require('./StudentInfo');
const Person = require('./Person'); 

// Using student module
console.log("Student Name: " + student.getName());
console.log("Location: " + student.getlocation());
console.log("Date of Birth: " + student.dob);
console.log("Grade is: " + student.Studentgrade(55));

// Using Person class
const person1 = new Person("Jim", "USA", "myemail@gmail.com");
console.log(person1.getPersonInfo());
os=require("os")

const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")

