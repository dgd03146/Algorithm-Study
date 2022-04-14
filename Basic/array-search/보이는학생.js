function solution(arr) {
  let answer = [];
  let count = 0;
  answer.push(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Math.max(...answer)) {
      answer.push(arr[i]);
    }
  }
  return answer.length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

//  function solution(arr) { let answer = 1; let MAX = arr[0]; for (let i = 1; i
// < arr.length; i++) { if (arr[i] > MAX) { MAX = arr[i]; answer++; } } return
// answer; }
