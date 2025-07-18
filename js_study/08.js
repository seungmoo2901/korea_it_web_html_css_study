//REST 문법과 Spread 문법
const student = {
  name: "이승무",
  age: 26,
  address: "김해시",
  phone: "010-1234-5678",
};

const { name, address } = student;
console.log(name, address);

//REST문법
//나머지 속성들을 새로운 객체 또는 배열로 묶을 때 사용
const { age, phone, ...a } = student;
console.log(age, phone, a);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

//Spread 문법
//기존 객체의 모든 속성을 새로운 객체에 복사하거나,
//새로운 속성을 추가할 때 사용
const newStudent = {
  ...student, // student 객체에 있던 모든 속성을 여기에 복사
  gender: "남", //gender 라는 새로운 속성 추가
};
console.log(newStudent);

const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

let names = [];

function addName(name) {
  names = [...names, name];
}
addName("이승무");
addName("삼승무");
console.log(names);

let obj = {
  data1: "data1",
  data2: "data2",
};

function addProps(props) {
  obj = {
    ...obj,
    ...props,
  };
}

addProps({ data3: "data3", data4: "data4" });
console.log(obj);

//score 변수에 임의의 숫자 할당
//조건에 따라서 등급을 부여
//90점 이상이면 A
//80.. B
//70.. C
//나머지 F

const score = 80;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

//for문 이용해서 1부터 20까지 숫자중 짝수만 출력
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//1.title,author,publisherYear 속성을 포함하는 book 객체 생성
//해리포터,j.k롤링,1997
//2.book객체의 title과 author 속성값 출력 (점,대괄호)
//3.book객체에 getAge()라는 메소드 추가
// 현재연도(newDate().getFullYear())에서 publisherYear를 뺀 값을 리턴
//getAge()호출해서 출력
//5. book객체에 새로운 속성 genre를 추가하고 값을 할당("판타지")
//6.book 객체의 publisherYear를 2000으로 수정

const book = {
  title: "해리포터",
  author: "J.K롤링",
  publisherYear: 1997,
};

console.log(book.title);
console.log(book["author"]);

book.getAge = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - book.publisherYear;
};
console.log(book.getAge());

book.gender = "판타지";
console.log(book.gender);

book.publisherYear = 2000;
console.log("수정년도:", book.publisherYear);

const products = [
  { id: 1, name: "노트북", price: 1200000, category: "전자제품" },
  { id: 2, name: "티셔츠", price: 25000, category: "의류" },
  { id: 3, name: "모니터", price: 300000, category: "전자제품" },
  { id: 4, name: "청바지", price: 50000, category: "의류" },
  { id: 5, name: "마우스", price: 15000, category: "전자제품" },
];

//1. 50000원 이상인 제품만 필터링해서 expensiveProducts 배열에 넣고 출력
//2. products배열에서 각 제품의 이름과 가격만 포함하는 productNamesAndPrices배열 만들기
// [{name: "노트북", price: 1200000}, {}...]
//3. products배열에서 category가 전자제품인 제품만 선택해서 각 제품의 이름과 가격을
//10%할인한 discountProducts배열을 만드세요
const expensiveProducts = products.filter((product) => product.price >= 50000);
console.log(expensiveProducts);

const productNamesAndPrices = products.map((product) => ({
  name: product.name,
  price: product.price,
}));
console.log(productNamesAndPrices);

const discountProducts = products
  .filter((product) => product.category === "전자제품")
  .map((product) => ({
    name: product.name,
    price: product.price,
    price: Math.round(product.price * 0.9),
  }));
console.log(discountProducts);
