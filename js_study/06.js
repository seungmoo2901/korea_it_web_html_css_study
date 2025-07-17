//단축 평가 논리 연산
//&& ||
const name = "이승무";

console.log(!!name && !!"삼승무");
//&&(AND)연산
//앞의 값이 TRUE일때 뒤의값을 리턴, false일때 false
console.log(false && 10);
console.log(true && 10);
console.log(!name && false);

// || 연산
//앞의 값이 false일때 뒤의값을 리턴, , true일때 true리턴
console.log(false || 10);
console.log(true || 10);

//nulllish 병합 연산자 => ??
//앞의길이 null또는 undefined가 아니면 앞의 값, 그 외에는 뒤의값
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);
console.log(0 ?? 100)
console.log("" ?? 100)
