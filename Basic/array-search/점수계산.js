function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) answer += 1;
    else {
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === 1) {
        answer += 1;
      } else {
        break;
      }
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
