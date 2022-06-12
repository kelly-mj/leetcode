import { run } from '../runner';

const testcases = [
  {
    input: 'foo',
    answer: 'bar'
  }
];

const options = {
  problemName: undefined,
  printInput: false,
  printTestResults: true,
  printStatistics: true,
  runCases: []
};

const solution = (input) => {
  return 'bar';
};

run(solution, testcases, options);
