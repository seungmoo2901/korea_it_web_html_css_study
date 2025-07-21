const submitButton = document.querySelector(".input-button");

submitButton.onclick = () => {
  const input = document.querySelector(".inputs");
  const dataList = document.querySelector(".data-list");

  if (input.value === "") {
    alert("빈칸이야");
    return;
  }

  dataList.innerHTML += `<li>${input.value}</li>`;

  input.value = "";
};
