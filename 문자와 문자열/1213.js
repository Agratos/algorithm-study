/**
 * 문제
 * 임한수와 임문빈은 서로 사랑하는 사이이다.
 * 임한수는 세상에서 팰린드롬인 문자열을 너무 좋아하기 때문에, 둘의 백일을 기념해서 임문빈은 팰린드롬을 선물해주려고 한다.
 * 임문빈은 임한수의 영어 이름으로 팰린드롬을 만들려고 하는데, 임한수의 영어 이름의 알파벳 순서를 적절히 바꿔서 팰린드롬을 만들려고 한다.
 * 임문빈을 도와 임한수의 영어 이름을 팰린드롬으로 바꾸는 프로그램을 작성하시오.
 *
 * 입력
 *  첫째 줄에 임한수의 영어 이름이 있다. 알파벳 대문자로만 된 최대 50글자이다.
 *
 * 출력
 *  첫째 줄에 문제의 정답을 출력한다. 만약 불가능할 때는 "I'm Sorry Hansoo"를 출력한다. 정답이 여러 개일 경우에는 사전순으로 앞서는 것을 출력한다.
 *
 * 예제
 *  AABB
 *  AAABB
 *  ABACABA
 *  ABCD
 * 예제 출력
 *  ABBA
 *  ABABA
 *  AABCBAA
 *  I'm Sorry Hansoo
 */

/**
 * 필요 지식
 ** 팰린드롬인 문자열
 */

const fs = require('fs');
// const inputArray = fs.readFileSync("/dev/stdin").toString().trim().split('');
const inputArray = fs.readFileSync('../input.txt').toString().trim().split('');

let inputMap = new Map();

for (let i = 0; i < 26; i++) {
	const char = String.fromCharCode(65 + i);
	inputMap.set(char, 0);
}

inputArray.forEach((str) => {
	inputMap.set(str, (inputMap.get(str) ?? 0) + 1);
});

let resultArray = [];
let tempArray = [];
let middleKey = '';
let oddCount = 0;

Array.from(inputMap).forEach((arr) => {
	let [key, value] = arr;
	let isOddNumber = false;
	if (value !== 0) {
		if (value % 2 === 1) {
			middleKey = key;
			oddCount += 1;
			isOddNumber = true;
		}

		if (value > 1) {
			for (let i = 0; i < (value - (isOddNumber ? 1 : 0)) / 2; i++) {
				tempArray.push(key);
			}
		}
	}
});

if (oddCount > 1) return console.log("I'm Sorry Hansoo");

resultArray = [...tempArray];
if (middleKey !== '') resultArray.push(middleKey);
resultArray.push(...tempArray.reverse());
console.log(resultArray.join(''));
