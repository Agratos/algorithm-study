/**
 * 문제
 *  영수증에 적힌,
 *   - 구매한 각 물건의 가격과 개수
 *   - 구매한 물건들의 총 금액
 *  을 보고, 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.
 * 
 * 입력
 *  첫째 줄에는 영수증에 적힌 총 금액 X가주어진다.
 *  둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 N이 주어진다.
 *  이후 N개의 줄에는 각 물건의 가격 a와 개수 b가 공백을 사이에 두고 주어진다.
 * 
 * 출력
 *  구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다. 일치하지 않는다면 No를 출력한다.
 * 
 * 예제
 *  1)
 *    260000
 *    4
 *    20000 5
 *    30000 2
 *    10000 6
 *    5000 8
 * 
 *  2)
 *    250000
 *    4
 *    20000 5
 *    30000 2
 *    10000 6
 *    5000 8
 * 
 * 예제 출력
 *  1) Yes
 *  2) No
 */

/**
 * 필요 지식
 ** 구현
 ** 반복문
 */

const fs = require('fs');
const [X, N, ...list] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arrayList = list.map((str) => {
    const [value, count] = str.split(' ');
    return {value: Number(value), count: Number(count)}
})

let amountValue = 0;
arrayList.map(({value, count}) => {
    amountValue += value * count;
})

console.log(amountValue === Number(X) ? 'Yes' : 'No');
