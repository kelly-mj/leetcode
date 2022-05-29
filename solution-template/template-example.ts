import { run } from '../runner'; // Adjust as needed

const testcases = [
  {
    input: [1, 2],
    answer: 3
  },
  {
    input: [-5, 7, 8, 10],
    answer: 20
  },
  {
    input: [0, 0, -7],
    answer: -7
  }
];

// uncomment and set whatever you want
const options = {
  problemName: 'Simple Addition',
  printInput: true,
  printTestResults: true
  // printStatistics: true
};

const solution = (input: any) => {
  let sum = 0;
  for (let i of input) sum += i;
  return sum;
};

run(solution, testcases, options);
