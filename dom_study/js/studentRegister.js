function studentResgister() {
  return `
    <div>
    ${studentResgisterInput({
      type: "text",
      name: "name",
      onkeyup: "",
    })}
    ${studentResgisterInput({
      type: "text",
      name: "age",
      onkeyup: "",
    })}
    ${studentResgisterInput({
      type: "text",
      name: "address",
      onkeyup: "",
    })}
    <div>
    <button onclick="">등록</button>
    </div>
    </div>`;
}
