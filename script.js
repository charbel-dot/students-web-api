const studentsContainer = document.querySelector(".students-container");
const btnGetStudents = document.querySelector(".btn-get-students");
const headerContainer = document.querySelector(".header-container");

const URL = "https://students-api-8v0s.onrender.com/getstudents";

const fetchStudentsData = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((err) => console.log(err));
};

let click = 0;

btnGetStudents.addEventListener("click", () => {
  click += 1;
  click === 1
    ? fetchStudentsData()
    : alert("You can only fetch Students once!");
});

const showData = (data) => {
  let popUpSuccess = document.createElement("h1");
  popUpSuccess.classList.add("popup");
  popUpSuccess.textContent = "Fetched Students Successfully!";
  headerContainer.append(popUpSuccess);

  setTimeout(() => {
    popUpSuccess.remove();
  }, 1500);

  data.forEach((student) => {
    let studentName = student["name"];
    let studentId = student["id"];

    let studentParentDiv = document.createElement("div");
    studentParentDiv.classList.add("student-parent-div");
    let studentIdSpan = document.createElement("span");
    studentIdSpan.textContent = `Student ID: ${studentId}`;
    let studentNameSpan = document.createElement("span");
    studentNameSpan.textContent = `Student Name: ${
      studentName[0].toUpperCase() + studentName.slice(1, studentName.length)
    }`;
    studentParentDiv.append(studentIdSpan);
    studentParentDiv.append(studentNameSpan);
    studentsContainer.append(studentParentDiv);
  });
};
