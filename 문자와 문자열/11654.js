/**
 * 문제
    알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오. 
 
 * 입력
    알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

 * 
 * 출력
    입력으로 주어진 글자의 아스키 코드 값을 출력한다.

 * 예제
    A  
 * 예제 출력
    65 
 */

/**
 * 필요 지식
 ** 구현
 ** 문자
 ** 문자 -> 아스키코드: charCodeAt(문자)
 ** 아스키코드 -> 문자: String.fromCharCode(숫자)
 */

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString();

console.log(input.charCodeAt());
