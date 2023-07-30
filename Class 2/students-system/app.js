function register(){
    let studentName = prompt("Enter student name: ");
    let student101Grade = Number(prompt("Enter student's 101 grade:"));
    let student102Grade = Number(prompt("Enter student's 102 grade:"));
    let studentGPA = (student101Grade + student102Grade)/2;
    // console.log(studentName);
    // document.write(`<li class="text">${studentName}</li>`);
    document.getElementById("studentList").innerHTML += `<li class="text">${studentName} | FSDI-101: ${student101Grade} | FSDI-102: ${student102Grade} | GPA: ${studentGPA.toFixed(2)}</li>`;
}  