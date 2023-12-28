---------------------------------------

백준 알고리즘에서 Javascript로 문제로 풀때에는 언어 설정을 Node로 선택 해야 한다.

---------------------------------------     
</br></br>
### 문제를 풀때 필요한 기본 Node 지식

#### 1. 입력값이 한 개일 때(한 줄)
  ```node
    ex)110
    const fs = require('fs');
    const input = fs.readFileSync("/dev/stdin").toString().trim();
  ```   
#### 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
  ```node
    ex)110 78 158
    const fs = require('fs');
    const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
  ```   
#### 3. 입력값이 여러 줄일 때
  ```node
    ex)
      110
      78
      158
    const fs = require('fs');
    const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  ```   
#### 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
  ```node
    ex)
      3
      110 78 158
    const fs = require('fs');
    const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
    const inputArr = input.trim().split(" ")
  ```   
#### 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
  ```node
    ex)
      3
      110
      78
      158
    
    const fs = require('fs');
    const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  ```
