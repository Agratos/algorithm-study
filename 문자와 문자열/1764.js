/**
 * 문제
    김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.

 * 입력
    첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다. 
    이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다.
    이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다
    N, M은 500,000 이하의 자연수이다.

 * 출력
    듣보잡의 수와 그 명단을 사전순으로 출력한다.

 * 예제
    3 4
    ohhenrie
    charlie
    baesangwook
    obama
    baesangwook
    ohhenrie
    clinton

 * 예제 출력
    baesangwook
    ohhenrie
 */

/**
 * 필요 지식
 ** 공간복잡도
 ** Set, Map
 */

const fs = require('fs');
// const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...input] = fs.readFileSync('../input.txt').toString().trim().split('\r\n');

const [dn, bn] = n.split(' ');
const dArray = new Set(input.slice(0, dn));
const bArray = new Set(input.slice(dn));
const result = [];

dArray.forEach((d) => {
	if (bArray.has(d)) result.push(d);
});

console.log(`${result.length}\n${result.sort().join('\n')}`);
