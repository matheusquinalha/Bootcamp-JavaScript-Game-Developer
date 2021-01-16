
const N  = parseInt(gets());

for (let i = 0; i < N; i++) {

  const input = gets();
  const words = input.split(' ', 50);

  const filteredWords = words.filter(w => new RegExp(/^[A-Za-z0-9 ]{1,50}$/).test(w));

  const sortedWords = filteredWords.sort((a, b) => {
    if (b.length - a.length === 0) {
      return a.localeCompare(b, 'en', { sensitivity: 'base' });
    }
    else return b.length - a.length
  })

  console.log(sortedWords.join(' '))
}