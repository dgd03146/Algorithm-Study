function solution(k, arr) {
  let sum = 0,
    answer,
    i;
  for (i = 0; i < k; arr[i]) {
    sum += arr[i];
  }
  answer = sum;
  for (i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
