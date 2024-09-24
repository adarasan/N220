const academy = {
  courseNumber: "N220",
  courseTitle: "Introduction to Media Application Development",
  totalSeats: 20,
  enrolledStudents: 18,

  getAvailability: function () {
    //return(this.totalSeats - this.enrolledStudents) !==0;

    this.totalSeats > this.enrolledStudents;
  },
};

//1. Are seats available
console.log(` N220 Open: ${academy.getAvailability()}`);

//2. Two more peeps
academy.enrolledStudents += 2;
console.log(`Total Students: ${academy.enrolledStudents}`);

//3. Check availaibility again

console.log(`N220 Open: ${academy.getAvailability}`);

//Built-in Objects!!

var tacocat = "Wednesday";

function IUPUIWebsite() {
  console.log(window.tacocat);
  console.log(`Inner Height: ${window.innerHeight}`);

  console.log(`Inner Width: ${window.innerWidth}`);

  console.log(`Outer Height: ${window.outerHeight}`);

  console.log(`Outer Width: ${window.outerWidth}`);

  console.log(window.location);
}

function printPage() {
  window.print();
}

document.getElementById("dpDetails").innerHTML += academy.courseTitle;

document.querySelector("#domain").innerHTML += "Hi";

const updatePTag = document.getElementById("update");

console.log(updatePTag.querySelector("#delete"));
