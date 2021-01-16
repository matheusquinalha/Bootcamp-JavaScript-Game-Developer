const nCases = parseInt(gets()) //para uso na DIO
let input = 0
let numbers = []

for (let i = 1; i <= nCases; i++) {
  input = parseInt(gets()) //para uso na DIO

  if ((input < 1 || input > 2000)) {
    //skip invalid entry
    continue;
  }

  numbers = [...numbers, input];
}

const distinctNumbers = Array.from(new Set(numbers))
  .sort((a, b) => a - b)
  .map(v => ([v, 0]))

let countNumberMap = new Map(distinctNumbers)

numbers.forEach(n => {
  countNumberMap.set(n, countNumberMap.get(n) + 1)
})

for (const [number, times] of countNumberMap) {
  console.log(`${number} aparece ${times} vez${times > 1 ? 'es' : ''}`) // saída com singular ou plural
  console.log(`${number} aparece ${times} vez(es)`) //saída exigida na DIO
}