/**
 * 문제
 * a와 b로만 이루어진 문자열이 주어질 때,  a를 모두 연속으로 만들기 위해서 필요한 교환의 회수를 최소로 하는 프로그램을 작성하시오.
 * 이 문자열은 원형이기 때문에, 처음과 끝은 서로 인접해 있는 것이다.
 * 예를 들어,  aabbaaabaaba  이 주어졌을 때, 2번의 교환이면 a를 모두 연속으로 만들 수 있다.
 *
 * 입력
 * 첫째 줄에 문자열이 주어진다. 문자열의 길이는 최대 1,000이다.
 *
 * 출력
 * 첫째 줄에 필요한 교환의 회수의 최솟값을 출력한다.
 *
 * 예제
 * abababababababa
 * ba
 * aaaabbbbba
 * abab
 * aabbaaabaaba
 * aaaa
 * 예제 출력
 * 3
 * 0
 * 0
 * 1
 * 2
 * 0
 */

/**
 * 필요 지식
 ** 브루트포스 ( 모든 시작점 검사 )
 * 몇번바꿔야되는지 확인
 * ex)  abababababababa -> a의 갯수를 샌다
 * a가 8개 b가 7개
 * a가 연속되려면 a가 총 8개가와야한다.
 * 앞에서부터 순서대로 8개를 잘름
 * 그안에 b가 몇개 들었는지 확인
 * b가 가장 적은 것을 갯수를 반환
 * 원통으로 되어있기떄문에 배열을 2배로 복사 후 총 15번까지 8개를 자른다
 */

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const input = fs.readFileSync('../input.txt').toString().trim().split('');

const tempInput = [...input, ...input];
const aCount = input.filter((ch) => ch === 'a').length;
let minChangeCount = 1000;

for (let i = 0; i < input.length; i++) {
	const tempArray = tempInput.slice(i, i + aCount);
	let tempChangeCount = tempArray.filter((ch) => ch === 'b').length;
	if (minChangeCount > tempChangeCount) minChangeCount = tempChangeCount;
}

console.log(minChangeCount);
