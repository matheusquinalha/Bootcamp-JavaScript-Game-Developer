let input = '';
let results;
let limit = 0;

while (true) {
  input = gets() //para uso na DIO

  if (!input || input === '' || input.length > 30) break;

  limit = -Math.floor(input.length / 2)
  results = []

  for (let index = -1; index >= limit; index--) {
    input.slice(index) === input.slice(index * 2, index) && results.push(input.slice(0, index))
  }

  if (!results || results.length === 0) {
    console.log(input)
    continue;
  }

  for (const result of results.sort()) {
    console.log(result)
  }
}