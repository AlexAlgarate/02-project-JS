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

