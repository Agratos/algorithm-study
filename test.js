let A = 12345;

let answer = 0;

let change = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];

for(let i = 0 ; i < change.length ; i++){
    answer += Math.floor(A / change[i]);
    A %= change[i];
    if(A === 0) break;
}

console.log(answer);



