//1.  create a classroom object with  properties and method for:

// - the list of students

// - class name

//- show student function

// - max students

/** 2.  The show students function 

method for your classroom object should:
 
- clear current student show in p tag

- looop through the list of students and then to p tag ( use <br />> after each students)

**/

/** 3
 *  create a fucntion for adding new students, (make sure it matches the button on click function call).
 *
 * This function should check if there is a seat available.
 *
 * If there is not then console.log ("No seats available")
 *
 * if there are then add the students name to thhe list of students on the classroom object then run  the show students method.
 *
 *
 *
 *
 *
 *
 *
 */

//1.

// create two reference variables for the input

const classroom = {
  students: [],
  name: "DJ's Class",
  showStudents() {
    document.getElementById("students").innerHTML = "";

    this.students.forEach(function (studentName) {
      document.getElementById("students").innerHTML += studentName + "<br />";
    });
  },

  maxStudents: 2,
};

function addNewStudent() {
  const currentStudents = classroom.students.length;

  if (currentStudents >= classroom.maxStudents) {
    console.log("No seats availlable");
  } else {
    classroom.students.push(document.getElementById("studentName").value);
    classroom.showStudents();
  }
}

// fuction to remove students

function removeStudent() {
  classroom.students.pop();
  classroom.showStudents();
}

/**  This can replace the  "this. students. for each loop"
 *
 * for (let i = 0; i < classroom.students.length - 1; i++){
 *
 *  const studentName = classroom.students[i];
 * document.getElementById("students").innerHTML += studentName + "<br />";
 *
 *
 *
 * }
 *
 *
 *
 *
 *
 *
 *
 */
