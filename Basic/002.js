// 
let arr = [200, 100, 300]

// splice 배열안에 새로운 변수를 삽입 삭제
// arr.splice(A, B, C);
// A는 배열의 번지수
// B는 제거할 원수의 개수
// C는 새롭게 삽입할 값

// case 1
// 첫번째 원소부터 1개의 값을 삭제할 경우
// spice(0,1)

// case 2
// 값을 삭제하지 않는 경우
// splice(2, 0, 10000) 의 경우
// 2번째 인자에 (두번째 인자값이 0이므로 삭제 갯수 0)
// 10000을 삽입한다.

arr.splice();
console.log(arr);