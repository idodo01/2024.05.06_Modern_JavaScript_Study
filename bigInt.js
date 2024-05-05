// 자바스크립트는 정수 표현의 한계가 있다
//  9007199254740992가 최대

console.log(9007199254740991 + 1 === 9007199254740991 + 2); // true
console.log(9007199254740991 + 2); /// 9007199254740992
console.log(9007199254740993); /// 9007199254740992

// 한계를 넘어선 값을 다루기 위해서
// BigInt 데이터 타입 등장

// 방법은 2가지가 있다
// 1. 숫자 뒤에 n 붙이기
console.log(9007199254740993n); // 9007199254740993n
// 2. BigInt 함수 사용
console.log(BigInt('9007199254740993')); // 9007199254740993n


// 큰 정수를 표현하기 위한 데이터 타입이기 때문에 
// 소수 표현에는 사용할 수가 없다.
// console.log(1.5n); // SyntaxError


 // BigInt 타입끼리만 연산할 수 있고, 
 //서로 다른 타입끼리의 연산은 
 //명시적으로 타입 변환을 해야 한다.
 // console.log(3n * 2); // TypeError
console.log(3n * 2n); // 6n
console.log(Number(3n) * 2); // 6
