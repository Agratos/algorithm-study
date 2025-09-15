/**
 * 문제
 *  N개의 전구가 있고 맨 왼쪽에 있는 전구를 첫 번째라고 하자. 전구의 상태는 두 가지가 있으며 이를 숫자로 표현한다.
 *  1은 전구가 켜져 있는 상태를 의미하고, 0은 전구가 꺼져 있는 상태를 의미한다.
 *  전구를 제어하는 명령어가 1번부터 4번까지 4개가 있다. 아래 표는 각 명령어에 대한 설명이다.
 *  1번 명령어 [i x] (1 <= i <= N, 0 <= x <= 1)	 
 *  i 번째 전구의 상태를 x로 변경한다.
 *  2번 명령어 [l r] (1 <= l <= r <= N) 	 
 *  l번째부터 r번째까지의 전구의 상태를 변경한다. (켜져있는 전구는 끄고, 꺼져있는 전구는 킨다.)
 *  3번 명령어 [l r] (1 <= l <= r <= N) 	 
 *  l번째부터 r번째까지의 전구를 끈다.
 *  4번 명령어 [l r] (1 <= l <= r <= N) 	 
 *  l번째부터 r번째까지의 전구를 킨다.
 *  주어지는 명령어를 다 수행한 결과 전구는 어떤 상태인지 알아보자.
 * 
 * 입력
 *  첫 번째 줄에 전구의 개수 N와 입력되는 명령어의 개수 M이 주어진다.
 *  두 번째 줄에는 N개의 전구가 현재 어떤 상태 s인지 주어진다. (0은 꺼져있는 상태, 1은 켜져있는 상태)
 *  3 번째 줄부터 M + 2 번째 줄까지 세 개의 정수 a, b, c가 들어온다.
 *  a는 a번째 명령어를 의미하고 
 *  b, c는 a가 1인 경우는 각각 i, x를 의미하고 
 *  a가 2, 3, 4 중 하나면 각각 l, r을 의미한다.
 * 
 * 출력
 *  
 * 
 * 예제
8 3
0 0 0 0 0 0 0 0
1 2 1
1 4 1
2 2 4
 * 예제 출력
 *  0 0 1 0 0 0 0 0
 */

const fs = require('fs');
// const [f, status, ...round] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [f, status, ...round] = fs.readFileSync('../input.txt').toString().trim().split('\r\n');
const resultArray = status.split(' ').map((item) => Number(item));

round.forEach((item) => {
	const [order, first, second] = item.split(' ').map((item) => Number(item));

	switch (order) {
		case 1:
			resultArray[first - 1] = Number(second);
			break;
		case 2:
			for (let i = first - 1; i < second; i++) {
				resultArray[i] = resultArray[i] === 0 ? 1 : 0;
			}
			break;
		case 3:
			for (let i = first - 1; i < second; i++) {
				resultArray[i] = 0;
			}
			break;
		default:
			for (let i = first - 1; i < second; i++) {
				resultArray[i] = 1;
			}
	}
});

console.log(resultArray.join(' '));
