/**
 * 문제
    알파벳 대소문자로 된 단어가 주어지면, 
    이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
    단, 대문자와 소문자를 구분하지 않는다.

 * 입력
    첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 
    주어지는 단어의 길이는 1,000,000을 넘지 않는다.

 * 출력
    첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 
    단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

 * 예제
    Mississipi
    zZa

 * 예제 출력
    ?
    Z
 */

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = 'zZa'.toUpperCase();

const inputArray = input.split('');
const resultMap = new Map();
const resultArray = [];
let resultKey = '';

inputArray.map((str) => {
	if (resultMap.has(str)) {
		resultMap.set(str, resultMap.get(str) + 1);
	} else {
		resultMap.set(str, 1);
	}
});

for (const value of resultMap.values()) {
	resultArray.push(value);
}

const maxValue = Math.max(...resultArray);

if (resultArray.filter((value) => value === maxValue).length > 1) {
	return console.log('?');
} else {
	for (const [k, v] of resultMap.entries()) {
		if (v === maxValue) {
			resultKey = k;
			console.log(resultKey);
			break;
		}
	}
}
