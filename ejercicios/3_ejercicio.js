// Ejercicio 3.1

const createPath = (directoryParts) => {
  const extension = directoryParts.at(-1);
  const path = directoryParts.slice(0, -1).join('/');

  console.log(`'${path}.${extension}'`);
};

const input1 = ['Downloads', 'Videos', 'capture', 'mp4'];
createPath(input1); // 'Downloads/Videos/capture.mp4'
const input2 = ['CodinGame', 'python', 'py'];
createPath(input2); // 'CodinGame/python.py'
const input3 = [
  'programming',
  'languages',
  'easy',
  'beginner',
  'useful',
  'pythonstuff',
  'py',
];
createPath(input3); // 'programming/languages/easy/beginner/useful/pythonstuff.py'

/*3.2 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/

const input = 10;
// create your function here
const dashSeparator = (input) => {
  console.log(input.toString().split('').join('-'));
};
dashSeparator(input); // '1-0'
const secondInput = 1;
dashSeparator(secondInput); // '1'
const thirdInput = 11234;
dashSeparator(thirdInput); // '1-1-2-3-4'

// 3.3 Ejercicio
// Crea una función para que con estos datos de entrada se produzca los siguientes
// resultados:

const yourFunction = (word) => {
  const reversedWord = word.split('').reverse().join('');

  console.log(`${word.length} ${reversedWord}`);
};

const input4 = 'string';
// create your function here
yourFunction(input4); // '6 gnirts'
const input5 = 'variable';
yourFunction(input5); // '8 elbairav'
const input6 = 'pointer';
yourFunction(input6); // '7 retniop'
