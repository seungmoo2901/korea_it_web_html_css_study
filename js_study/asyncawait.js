// async(비동기 함수 정의 키워드)
// awiat(비동기 함수 동기 호출 키워드)
// awiat는 async함수 내부에서만 사용 가능
// await는 promise가 resolve될때까지 기다렸다가 결과를 변수에 할당

// const promise = new Promise((resolve) => resolve("개발자"));

// async function getData() {
//   //async키워드가 함수 자체를 비동기 함수로 만듦(함수 자체가 promise)
//   return promise; //프로미스에 프로미스가 감싸진 형태가 아님
// }

// const user = getData();
// user.then((name) => console.log(name));

// function getUserReq() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("사용자 데이터를 받아옴");
//       return resolve("서버1");
//     }, 2000);
//   });
// }

// async function getData() {
//   //getUserReq(); //비동기 함수가 끝날때 까지 다음 작업 기다려 주지 않음
//   const result = await getUserReq(); //await는 해당 비동기 작업이 완료될때까지 다음 작업을 하지 않고 기다림
//   const result2 = await getUserReq();
//   return "이승무";
// }

// function getDataPromise() {
//   return getUserReq()
//     .then(() => {
//       return getUserReq;
//     })
//     .then(() => {
//       return "이승무";
//     });
// }

// const user = getDataPromise();
// user.then((name) => console.log(name));

function getUserReq() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("사용자 데이터를 받아옴");
      return resolve("서버1");
    }, 2000);
  });
}

async function getUser() {
  await getUserReq();
  return "이승무";
}

async function getTodo() {
  await getUserReq();
  return ["밥먹기", "잠자기"];
}

async function getData() {
  const user = await getUser();
  const todo = await getTodo();
  console.log(`${user}님 ${todo}를 해야합니다.`);
}

getData();
