  const regexInput = /^(?=.*[A-Za-z*,;.!?\-\( \)])(?!.*[\:\d\r\t@#$%¨&]).{1,50}/
  const tags = { '*': ['<b>', '</b>'], '_': ['<i>', '</i>'] }
  let count;
  let last;
  
  while (true) {
    const input = gets() //para uso na DIO
    if (!input || input == '') break;
  
    text = regexInput.exec(input)
    if (text === null) continue;
  
    count = {}
    last = {}
  
    for (const tag in tags) {
      if (tags.hasOwnProperty(tag)) {
        count[tag] = 0
        last[tag] = input.lastIndexOf(tag)
      }
    }
    const output = [...text[0]].reduce((str, ch, i) => {
      let newCh = ch
  
      if (!!tags[ch]) {
        if (last[ch] === i && count[ch] % 2 === 0) newCh = ch
        else {
          newCh = tags[ch][count[ch] % 2]
          count[ch]++
        }
      }
  
      return str += newCh
    }, '')
  
    console.log(output);
  }