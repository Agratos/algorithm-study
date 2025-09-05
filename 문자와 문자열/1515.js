// 세준이는 1부터 N까지 모든 수를 차례대로 공백없이 한 줄에 다 썼다. 그리고 나서,
// 세준이가 저녁을 먹으러 나간 사이에 다솜이는 세준이가 쓴 수에서 마음에 드는 몇 개의 숫자를 지웠다.
// 세준이는 저녁을 먹으러 갔다 와서, 자기가 쓴 수의 일부가 지워져있는 모습을 보고 충격받았다.
// 세준이는 수를 방금 전과 똑같이 쓰려고 한다. 하지만, N이 기억이 나지 않는다.
// 남은 수를 이어 붙인 수가 주어질 때, N의 최솟값을 구하는 프로그램을 작성하시오. 아무것도 지우지 않을 수도 있다.)

/**
 * 문제
 *  1부터 N까지 모든 수를 차례대로 공백없이 한 줄에 다 썼다.
 *  자기가 쓴 수의 일부가 지워져있는 모습을 보고 충격받았다.
 *  세준이는 수를 방금 전과 똑같이 쓰려고 한다.
 *  N이 기억이 나지 않는다.
 *  N의 최솟값을 구하는 프로그램을 작성하시오.
 *
 * 입력
 *  첫째 줄에 지우고 남은 수를 한 줄로 이어 붙인 수가 주어진다. 이 수는 최대 3,000자리다.
 *
 * 출력
 *  가능한 N 중에 최솟값을 출력한다.
 *
 * 예제
 *  1234  => 1 2 3 4 // 안지운 케이스
 *  234092 => 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
 *  999909
 *  82340329923
 *  32098221
 *  345029834023049820394802334909240982039842039483294792934790209
 *  00000000000000000000000000000000000000000000000000000000000000000000000
 *  1111111 => 1 2 3 4 5 6 7 8 9 10 11 12 13 14
 *
 * 예제 출력
 *  4
 *  20
 *  49
 *  43
 *  61
 *  279
 *  400
 *  14
 *
 */

const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = fs.readFileSync('../input.txt').toString().trim();

const inputArray = input.split('');
let inputIndex = 0;
let numberIndex = 0;

while (true) {
	numberIndex += 1;
	if (inputIndex === inputArray.length) {
		console.log(numberIndex - 1);
		break;
	}

	if (String(numberIndex).includes(inputArray[inputIndex])) {
		let tempArray = String(numberIndex).split('');
		let tempIndex = 0;
		tempArray.forEach((target) => {
			if (target === inputArray[inputIndex + tempIndex]) tempIndex += 1;
		});

		inputIndex += tempIndex;
	}
}
