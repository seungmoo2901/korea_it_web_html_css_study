let studentInputValue = {
  id: 0,
  name: "",
  age: "",
  address: "",
};

function handleRegisterOnkeyup(e) {
  studentInputValue = {
    ...studentInputValue,
    [e.target.name]: e.target.value,
  };
}

const handleRegisterOnclick = (e) => {
  // let newId = 1;
  // if (studentList.length > 0) {
  //   const lastStudent = studentList[studentList.length - 1];
  //   newId = lastStudent.id + 1;
  // }

  const newStudent = {
    ...studentInputValue,
    id: studentList.length + 1,
  };

  studentList = [...studentList, newStudent];

  console.log(newStudent);
  loadStudentList();
};

function studentResgister() {
  return `
    <div>
    ${studentResgisterInput({
      type: "text",
      name: "name",
      onkeyup: "handleRegisterOnkeyup",
    })}
    ${studentResgisterInput({
      type: "text",
      name: "age",
      onkeyup: "handleRegisterOnkeyup",
    })}
    ${studentResgisterInput({
      type: "text",
      name: "address",
      onkeyup: "handleRegisterOnkeyup",
    })}
    <div>
    <button onclick="handleRegisterOnclick(event)">등록</button>
    </div>
    </div>`;
}
