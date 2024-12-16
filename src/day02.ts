export const createFrame = (names: string[]) => {
  // if (!Array.isArray(names) || !names.every(name => typeof name === 'string')) throw new TypeError('Solo recibe arrays de strings');
  let longest: number = 0
  
  names.forEach(name => {
    if (name.length > longest) {
      longest = name.length
    }
  })
  
  const upDownSide: string = '*'.repeat(longest + 4);
  let frame: string = upDownSide
  
  names.forEach(name => {
    const numOfSpaces: number = longest - name.length
    const spaces: string = ' '.repeat(numOfSpaces)
    frame += `\n* ${name}${spaces} *`
  })
  
  frame += `\n${upDownSide}`
  return frame
};
