const path = require('path');
const prompt = require('prompt-sync')();

const { openFile, write, camelCase, titlize } = require('./util');

const easyMatch = new RegExp(/^e(asy)?$/, 'i');
const mediumMatch = new RegExp(/^m(edium)?/, 'i');
const hardMatch = new RegExp(/^h(ard)?/, 'i');

const getType = (typed) => (typed ? ': any' : '');
const getExt = (typed) => (typed ? '.ts' : '.js');
const getCategoryFolder = (input) => {
  if (easyMatch.test(input)) return 'problems-easy';
  if (mediumMatch.test(input)) return 'problems-medium';
  if (hardMatch.test(input)) return 'problems-hard';
  return 'problems-any';
};

const problemName = prompt('Enter problem name: ');
const category = getCategoryFolder(prompt(`Choose category - medium (m): `));
const isTypescript = true;

const filename = camelCase(problemName);
const problemNameTitle = titlize(problemName);
const qualifiedFile = path.join(
  process.cwd(),
  category,
  filename + getExt(isTypescript)
);

openFile(qualifiedFile);

write(`import { run } from '../runner';`);

write(`\nconst testcases = [`);
write(`  {`);
write(`    input: 'foo',`);
write(`    answer: 'bar'`);
write(`  }`);
write(`];`);

write(`\nconst options = {`);
write(`  problemName: '${problemNameTitle}',`);
write(`  printInput: false,`);
write(`  printTestResults: true,`);
write(`  printStatistics: true,`);
write(`  runCases: []`);
write(`};`);

write(`\nconst solution = (input${getType(isTypescript)}) => {`);
write(`  return 'bar';`);
write(`};`);

write(`\nrun(solution, testcases, options);`);

console.log(`\nSaved: ${qualifiedFile}`);
console.log(`\nRun: npm run solve ${filename}`);
