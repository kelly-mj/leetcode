import { run } from '../runner';

// Source: https://leetcode.com/problems/3sum/

const testcases = [
  {
    input: [-1, 0, 1, 2, -1, -4],
    answer: [
      [-1, -1, 2],
      [-1, 0, 1]
    ]
  },
  {
    input: [],
    answer: []
  },
  {
    input: [0],
    answer: []
  }
];

const options = {
  problemName: '3Sum',
  printInput: true,
  printTestResults: true
  // printStatistics: true,
  // runCases: []
};

const solution = (nums: any) => {
  return [];
};

run(solution, testcases, options);
