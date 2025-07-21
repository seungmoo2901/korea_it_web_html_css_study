const title1 = document.getElementById("title");
//태그의 id를 통해 선택
console.log(title1);
console.log({ title1 });

const titles = document.getElementsByClassName("title");
//태그의 class를 통해서 선택
console.log(titles);

const h3 = document.getElementsByTagName("h3");
//태그명을 통해서 선택
console.log(h3);

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
console.log(d1);
console.log(d2);

const title2 = document.querySelector("#title"); //id 선택
console.log(title2);
console.log(title2.innerHTML);

title2.innerHTML = "다른제목";

const titles2 = document.querySelectorAll(".title"); //class 다중선택
console.log(titles2);

const h3s = document.querySelectorAll("h3");
console.log(h3s);

const d11 = document.querySelector("#d1");
const d22 = d11.querySelector("#d2");

const d222 = document.querySelector("#d1>#d2");
d222.innerHTML = "<p>innerHTML</P>";
d222.innerText = "<p>innerText</P>";

const students = [
  { name: "이승무", age: 26, address: "김해시" },
  { name: "김주엽", age: 23, address: "런던" },
  { name: "최호진", age: 17, address: "시애틀" },
];

const studentTableTbody = document.querySelector(".student-table > tbody");

const studentTrs = students.map((s, index) => {
  return `<tr>
    <td>${index + 1}</td>
    <td>${s.name}</td>
    <td>${s.age}</td>
    <td>${s.address}</td>
    </tr>`;
});

studentTableTbody.innerHTML = studentTrs.join("");

const tdList = document.querySelectorAll("td");
tdList.forEach((td) => (td.style = "border: 1px solid black"));

const studentTable = document.querySelector(".student-table");
studentTable.id = "table-student";
studentTable.classList.add("student");
studentTable.classList.remove("student-table");
