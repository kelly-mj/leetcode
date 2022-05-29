import { run } from '../runner'; // Adjust as needed

// 'input' and 'answer' can both be of any type.
// make sure the format&type of 'answer' matches the return value of the function 'solution' below
const testcases = [
  {
    // 1
    input: '',
    answer: ''
  },
  {
    // 2
    input: '',
    answer: ''
  }
  // ... and so on
];

// uncomment and set whatever you want
const options = {
  // problemName: undefined,  // Name of the problem, to print with output
  // printInput: false,       // Print input even if a test passes
  // printTestResults: true,  // Print test results (expected vs. actual) even if a test passes
  // printStatistics: true    // Print test suite statistics
  // runCases: [1]            // array of numbers indicating which tests to run. starts at 1.
};

const solution = (input) => {
  // add logic to solve the problem.
  // make sure the return type&format matches the type&format of 'answer' in the testcases input
};

run(solution, testcases, options);
