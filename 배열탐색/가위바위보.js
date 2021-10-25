function solution(n, a, b) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    switch (a[i]) {
      case b[i]:
        answer.push('D');
        break;
      case 1:
        b[i] === 2 ? answer.push('B') : answer.push('A');
        break;
      case 2:
        b[i] === 1 ? answer.push('A') : answer.push('B');
        break;
      case 3:
        b[i] === 1 ? answer.push('B') : answer.push('A');
    }
  }
  return answer.join('\n');
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(5, a, b));
