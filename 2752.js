/**
 * 문제
 *  정수 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램을 작성하시오.
 * 
 * 입력
 *  정수 세 개가 주어진다. 이 수는 1보다 크거나 같고, 1,000,000보다 작거나 같다. 이 수는 모두 다르다.
 * 
 * 출력
 *  제일 작은 수, 그 다음 수, 제일 큰 수를 차례대로 출력한다.
 * 
 * 예제
 *  3 1 2
 * 
 * 예제 출력
 *  1 2 3
 */

/**
 * 필요 지식
 ** sort
 * 원본을 변경
 * sort는 문자열로 비교하기 때문에 숫자를 정렬하려면 아래와 같다
 * 오름차순: sort((a, b) => a - b)
 * 내림차순: sort((a, b) => b - a)
 ** join
 * join은 배열을 한 문자열로 반환
 * ex) [1, 2, 3, 4].join('+') => '1+2+3+4'
 */

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

input.sort((a, b) => a - b)
console.log(input.join(' '))