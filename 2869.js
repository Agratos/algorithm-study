/**
 * 문제
 *  높이가 V인 나무 막대가 있다. 
 *  달팽이는 낮에는 A 미터 올라가고 밤에는 B만큼 미끌어진다.
 *  정상에 올라간 후에는 미끄러 지지 않는다.
 *  몇일이 걸리는지 구하는 프로그램을 작성하시오.
 * 
 * 입력
 *  첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다. (1 ≤ B < A ≤ V ≤ 1,000,000,000)
 * 
 * 출력
 *  첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.
 * 
 * 예제
 *  2 1 5
 * 
 * 예제 출력
 *  4
 */

/**
 * 필요 지식
 *  문제 해결 능력 (수학)
 */

 const fs = require('fs');
 const [A, B, V] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

 const days = Math.ceil((V - B) / (A - B));
 console.log(days);