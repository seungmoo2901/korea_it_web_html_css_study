const API_BASE_URL = "https://jsonplaceholder.typicode.com";
// 게시물 목록 컨테이너
const postListContainer = document.querySelector("#postListContainer");
// 게시물 상세 컨테이너
const postDetailContainer = document.querySelector("#postDetailContainer");
// 게시물 목록 ul
const postList = document.querySelector("#postList");

// 게시물 상세 제목
const detailTitle = document.querySelector("#detailTitle");
// 게시물 상세 ID
const detailId = document.querySelector("#detailId");
// 게시물 상세 유저 ID
const detailUserId = document.querySelector("#detailUserId");
// 게시물 상세 내용
const detailBody = document.querySelector("#detailBody");
// 목록으로 돌아가기 버튼
const backBtn = document.querySelector("#backBtn");

// 목록 - 상세 전환 함수
function changeContainer(containerId) {
  const containers = document.querySelectorAll(".page-container"); // 모든 페이지 컨테이너 요소를 가져옴
  containers.forEach((container) => {
    container.classList.remove("active"); // 모든 컨테이너에서 active 클래스 제거
  });
  document.querySelector(`#${containerId}`).classList.add("active"); // 지정된 ID의 컨테이너에 active 클래스 추가
}

// 게시물 목록 불러와서 렌더링 하는 함수
async function fetchPosts() {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`); // API에서 게시물 목록을 비동기 요청

    if (!response.ok) {
      throw new Error("문제발생!"); // 응답 실패 시 예외 처리
    }

    const posts = await response.json(); // 응답 데이터를 JSON으로 파싱
    postList.innerHTML = ""; // 기존 목록 초기화

    if (posts) {
      // 각 게시물 순회해서 li 안에 제목과 버튼 넣어서 ul 안에 넣기
      posts.forEach((post) => {
        postList.innerHTML += `
         <li>
         <span class="post-title" data-post-id="${post.id}">${post.title}</span>
         <button class="detail-btn" data-post-id="${post.id}">상세보기</button>
         </li>`; // 각 게시물을 li로 만들어 목록에 추가
      });
    } else {
      postList.innerHTML = '<p class="loading-message">게시물이 없습니다.</p>'; // 게시물이 없을 경우 메시지 출력
    }
  } catch (error) {
    postList.innerHTML =
      '<p class="loading-message" style="color:red;">게시물 목록을 불러오는데 실패했습니다.</p>'; // 오류 발생 시 메시지 출력
  }
}

// 게시물 상세 정보 불러오는 함수
async function fetchPostDetail(postId) {
  changeContainer("postDetailContainer"); // 상세 페이지로 전환
  detailTitle.textContent = "제목 불러오는중..."; // 로딩 표시
  detailId.textContent = "";
  detailUserId.textContent = "";
  detailBody.textContent = "내용 불러오는중..."; // 로딩 표시

  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`); // ID 기반으로 개별 게시물 요청

    if (!response.ok) {
      throw new Error("문제발생!"); // 요청 실패 시 예외 처리
    }

    const post = await response.json(); // 응답 데이터를 JSON으로 파싱
    detailTitle.textContent = post.title; // 제목 출력
    detailId.textContent = post.id; // 게시물 ID 출력
    detailUserId.textContent = post.userId; // 유저 ID 출력
    detailBody.textContent = post.body; // 본문 출력
  } catch (error) {
    alert("게시물 상세를 불러오는데 실패했습니다.");
    changeContainer("postListContainer"); // 실패 시 목록 페이지로 복귀
  }
}

// 게시물 목록에서 클릭 이벤트 처리
postList.addEventListener("click", (event) => {
  const target = event.target; // 클릭된 요소 가져오기

  if (
    target.classList.contains("post-title") ||
    target.classList.contains("detail-btn")
  ) {
    const postId = target.dataset.postId; // data-post-id 속성에서 게시물 ID 추출
    if (postId) {
      // 상세 요청
      fetchPostDetail(postId); // 해당 게시물 상세 정보 요청
    }
  }
});

// 목록으로 돌아가기 버튼 클릭 이벤트 처리
backBtn.addEventListener("click", () => {
  changeContainer("postListContainer"); // 목록 페이지로 전환
});

// 초기 페이지 로드 시 게시물 목록 불러오기
fetchPosts();
