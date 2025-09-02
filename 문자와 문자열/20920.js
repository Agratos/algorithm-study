/**
 * 문제
 *  자주 나오는 단어일수록 앞에 배치한다.
 *  해당 단어의 길이가 길수록 앞에 배치한다.
 *  알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치한다
 *  M 보다 짧은 길이의 단어의 경우 읽는 것만으로도 외울 수 있기 때문에 길이가 M이상인 단어들만 외운다고 한다
 *  
 * 입력
 *  첫째 줄에는 영어 지문에 나오는 단어의 개수 N 과 외울 단어의 길이 기준이 되는 M 이 공백으로 구분되어 주어진다
 *  1 <= N <= 100
 *  1 <= M <= 10
 *  둘째 줄부터 N+1 번째 줄까지 외울 단어를 입력받는다
 *  이때의 입력은 알파벳 소문자로만 주어지며 단어의 길이는 10을 넘지 않는다.
 *  단어장에 단어가 반드시 1개 이상 존재하는 입력만 주어진다.
 * 
 * 출력
 *  
 * 
 * 예제
 *  7 4
    apple
    ant
    sand
    apple
    append
    sand
    sand
 * 
 * 예제 출력
 *  sand
    apple
    append
 */

/*
  1. 각각 몇번 나왔는지 카운트
  2. 카운트가 같은것 끼리 같은 배열에 push
  3. 카운트가 같은것에서도 같은 길이 끼리 따로 배열에 담기
  4. 마지막에 sort 를 알파벳순으로
*/

const fs = require('fs');
// const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...input] = fs.readFileSync('../input.txt').toString().trim().split('\r\n');
const [N, M] = n.split(' ');

// const countTempArr = new Map();
// const countArr = Array.from({ length: inputLength }, () => []);
// const result = [];

// input.forEach((str) => {
// 	if (str.length >= minLength) {
// 		countTempArr.set(str, (countTempArr.get(str) ?? 0) + 1);
// 	}
// });

// for (const [key, value] of countTempArr) {
// 	countArr[value].push(key);
// }
// countArr
// 	.filter((arr) => arr.length > 0)
// 	.reverse()
// 	.forEach((arr) => {
// 		const tempArr = new Map();
// 		arr.forEach((str) => {
// 			tempArr.set(str.length, [...(tempArr.get(str.length) ?? []), str]);
// 		});
// 		const temp = [...tempArr.entries()].sort(([a], [b]) => b - a);
// 		for (const value of tempArr.values()) {
// 			result.push(value.sort());
// 		}
// 	});

// console.log(result.join('\n').replaceAll(',', '\n'));

// 1. 길이 M 이상만 카운팅

const freq = new Map();
for (let i = 0; i < N; i++) {
	const w = input[i];
	if (w.length >= M) {
		freq.set(w, (freq.get(w) || 0) + 1);
	}
}

const words = [...freq.keys()];
words.sort((a, b) => {
	const fa = freq.get(a),
		fb = freq.get(b);
	if (fa !== fb) return fb - fa; // 빈도 내림차순
	if (a.length !== b.length) return b.length - a.length; // 길이 내림차순
	return a < b ? -1 : a > b ? 1 : 0; // 알파벳 오름차순
});

// 3. 출력
console.log(words.join('\n'));
