const regex = /^(?!.*[!_@#$%¨&*\d\r\t\v\n]).{1,50}$/;
let input1;
let input2;

while (true) {
  input1 = gets();
  input2 = gets(); 
  if (!input1 || input1 == '') break;  

  if (!(regex.test(input1)) || !(regex.test(input2))) continue;

  console.log(longestCommonSubarray(input1, input2));

}

function longestCommonSubarray(a, b) {

  const m = a.length
  const n = b.length

  let matrix = [...Array(m + 1)].map(e => Array(n + 1).fill(0))

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (a[i] == b[j]) {
        matrix[i][j] = matrix[i + 1][j + 1] + 1
      }
    }
  }

  let maxn = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      maxn = Math.max(maxn, matrix[i][j])
    }
  }
  return maxn
}
