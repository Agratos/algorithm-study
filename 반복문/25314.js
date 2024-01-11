/**
 * 문제
    혜아는 책에 있는 정수 자료형과 관련된 내용을 기억해 냈다. 책에는 long int는 
    4바이트 정수까지 저장할 수 있는 정수 자료형이고 long long int는 
    8바이트 정수까지 저장할 수 있는 정수 자료형이라고 적혀 있었다. 혜아는 이런 생각이 들었다. “int 앞에 long을 하나씩 더 붙일 때마다 
    4바이트씩 저장할 수 있는 공간이 늘어나는 걸까? 분명 long long long int는 
    12바이트, long long long long int는 
    16바이트까지 저장할 수 있는 정수 자료형일 거야!” 그렇게 혜아는 당황하는 면접관의 얼굴을 뒤로한 채 칠판에 정수 자료형을 써 내려가기 시작했다.
    혜아가 N바이트 정수까지 저장할 수 있다고 생각해서 칠판에 쓴 정수 자료형의 이름은 무엇일까?

 * 입력
 *  첫 번째 줄에는 문제의 정수 N이 주어진다.(4 <= N <= 1000; N 은 4의 배수);
 * 
 * 출력
 *  혜아가 N바이트 정수까지 저장할 수 있다고 생각하는 정수 자료형의 이름을 출력하여라.
 * 
 * 예제
 *  1) long int
 *  2) 20
 * 
 * 예제 출력
 *  1) 4
 *  1) long long long long long int
 */

/**
 * 필요 지식
 ** 구현
 ** 반복문
 */

//const input = 20;
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let result = '';
let count = Math.floor(input / 4)

for(let i = 0 ; i < count ; i++){
    if(i === count-1){
        result += 'long int';
    }else{
        result += 'long ';
    }
}

console.log(result);