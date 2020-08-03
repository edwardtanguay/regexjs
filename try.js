const line = "const name = name + '- (named)';"
const regex = /\bname\b/gi;

const newLine = line.replace(regex, 'lastName');

console.log(newLine);
console.log('second');
