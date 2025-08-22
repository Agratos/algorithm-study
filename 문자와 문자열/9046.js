/**
 * 문제
    가장 많이 반복되는 문자를 출력
 * 
 * 입력
    입력의 T(1 ≤ T ≤ 20)는 테스트 케이스로, 입력 제일 상단에 주어진다. 
    각각의 테스트 케이스는 한 줄마다 소문자와 공백으로 이루어진 영어 문장이 주어진다. 
    이 문장의 길이는 적어도 1이상이며 255이하다.

 * 출력
    각각의 테스트 케이스에 대해, 가장 빈번하게 나타나는 문자를 출력하거나 빈번하게 나타나는 문자가 여러 개일 경우 '?'를 출력한다.
 
 * 예제
    3
    asvdge ef ofmdofn
    xvssc kxvbv
    hull full suua pmlu

 * 예제 출력
    f
    v
    ?
 */

/** 틀린 요인: trim 의 기능은 앞 뒤 공백 제거인데 모든 공백을 제거로 착각 */

const fs = require('fs');
// const [T, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [T, ...arr] = `3\na s v dg e e f ofm dof n\nxvssc kxvbv\nhull full suua pmlu`.toString().trim().split('\n');

arr.map((str) => {
	const temp = new Map();
	const strArr = Array.from({ length: str.length }, (_, index) => index);

	strArr.map((_, index) => {
		const key = str[index];
		if (key !== ' ') temp.set(key, (temp.get(key) ?? 0) + 1);
	});

	const maxValue = Math.max(...temp.values());
	const maxKey = [...temp].filter(([_, value]) => value === maxValue).map(([key]) => key);
	if (maxKey.length > 1) return '?';
	return maxKey[0];
}).map((result) => console.log(result));
