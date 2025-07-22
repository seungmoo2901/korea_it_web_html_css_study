//페이지 틀
let studentList = []; //전역으로 사용되는 상태 역할

//전체 페이지 메인 컴포넌트 역할
function app() {
  const appInfo = {
    title: "Commponent Study",
    date: new Date().toLocaleDateString(),
    //현재 날짜를 지역 형식에 맞게 문자열로 가져옴
    author: "이승무",
  };

  return `
  <div>
    <h1>제목:${appInfo.title}</h1>
    <h2>작성일:${appInfo.date}</h2>
    <h3>작성자:${appInfo.author}</h3>
    ${studentResgister()}
  </div>`;
}
