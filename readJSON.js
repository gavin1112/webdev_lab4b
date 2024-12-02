const fs = require('fs');

// Read the JSON file
fs.readFile('students.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data
  const studentData = JSON.parse(data);

  // Access the information of the first student
  // const name = studentData.Students[0].name;
  // const matricNo = studentData.Students[0].matricNo;
  // const age = studentData.Students[0].age;
  // const address = studentData.Students[0].address;
  // const subjects = studentData.Students[0].subjects;

  // Print the information
  // console.log("Name:", name);
  // console.log("Matric No:", matricNo);
  // console.log("Age:", age);
  // console.log("Address:", address);
  // console.log("Subjects:", subjects);

  // Access and print the information of all students
  studentData.Students.forEach(element => {

    console.log("Student:", element);
    
  });
});