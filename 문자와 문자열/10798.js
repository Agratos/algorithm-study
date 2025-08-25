/**
 * 문제
    A A B C D D
    a f z z 
    0 9 1 2 1
    a 8 E W g 6
    P 5 h 3 k x
    이렇게 입력 했을때 세로로 쭉 읽을때 그 문자열을 출력해라

 * 입력
    총 다섯줄의 입력이 주어진다. 
    각 줄에는 최소 1개, 최대 15개의 글자들이 빈칸 없이 연속으로 주어진다.
    주어지는 글자는 영어 대문자 ‘A’부터 ‘Z’, 영어 소문자 ‘a’부터 ‘z’, 숫자 ‘0’부터 ‘9’ 중 하나이다
    각 줄의 시작과 마지막에 빈칸은 없다.

 * 출력
    영석이가 세로로 읽은 순서대로 글자들을 출력한다. 이때, 글자들을 공백 없이 연속해서 출력한다. 

 * 예제
    A A B C D D
    a f z z 
    0 9 1 2 1
    a 8 E W g 6
    P 5 h 3 k x

 * 예제 출력
    Aa0aPAf985Bz1EhCz2W3D1gkD6x
 */

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `ABCDE\nabcde\n01234\nFGHIJ\nfghij`.toString().trim().split('\n');
const inputArray = input.map((str) => str.split(''));
const maxLength = Math.max(...input.map((str) => str.length));

let result = '';
for (let i = 0; i < maxLength; i++) {
	for (let j = 0; j < inputArray.length; j++) {
		if (inputArray[j][i]) {
			result += inputArray[j][i];
		}
	}
}

console.log(result);
