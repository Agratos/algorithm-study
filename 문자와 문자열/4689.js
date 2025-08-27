/**
 * 문제
    모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
    모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
    같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
 * 

 * 입력
    입력은 여러개의 테스트 케이스로 이루어져 있다.
    각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 테스트할 패스워드가 주어진다.
    마지막 테스트 케이스는 end이며, 패스워드는 한글자 이상 20글자 이하의 문자열이다. 또한 패스워드는 대문자를 포함하지 않는다.

 * 출력
    각 테스트 케이스를 '예제 출력'의 형태에 기반하여 품질을 평가하여라.
 
 * 예제
    a
    tv
    ptoui
    bontres
    zoggax
    wiinq
    eep
    houctuh
    end

 * 예제 출력
    <a> is acceptable.
    <tv> is not acceptable.
    <ptoui> is not acceptable.
    <bontres> is not acceptable.
    <zoggax> is not acceptable.
    <wiinq> is not acceptable.
    <eep> is acceptable.
    <houctuh> is acceptable.
 */

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = 'ooab\ntv\nptoui\nbontres\nzoggax\nwiinq\neep\nhouctuh\nend'.split('\n');
const vowels = ['a', 'e', 'i', 'o', 'u'];

input.forEach((str) => {
	let isError = 0;
	let consecutiveVowelCount = 0;
	let consecutiveConsonantCount = 0;
	let vowelCount = 0;

	if (str === 'end') return;

	let strArr = str.split('');
	for (index in strArr) {
		// 자음 모음 구분
		if (vowels.includes(strArr[index])) {
			// 모음
			if (index > 0) {
				if (['e', 'o'].includes(strArr[index])) {
					if (index > 1 && strArr[index] === strArr[index - 1] && strArr[index] === strArr[index - 2]) {
						isError += 1;
						break;
					}
				} else {
					if (strArr[index] === strArr[index - 1]) {
						isError += 1;
						break;
					}
				}
			}
			vowelCount += 1;
			consecutiveVowelCount += 1;
			consecutiveConsonantCount = 0;

			if (consecutiveVowelCount > 2) {
				isError += 1;
				break;
			}
		} else {
			// 자음
			if (index > 0) {
				if (strArr[index] === strArr[index - 1]) {
					isError += 1;
					break;
				}
			}
			consecutiveVowelCount = 0;
			consecutiveConsonantCount += 1;

			if (consecutiveConsonantCount > 2) {
				isError += 1;
				break;
			}
		}
	}

	if (vowelCount === 0 || isError === 1) {
		return console.log(`<${str}> is not acceptable.`);
	}

	return console.log(`<${str}> is acceptable.`);
});
