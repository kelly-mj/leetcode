import { RunOptions, run } from '../runner';

// Source: https://www.npmjs.com/package/ts-node

const testcases = [
  {
    input: 3,
    answer: 'III'
  },
  {
    input: 4,
    answer: 'IV'
  },
  {
    input: 58,
    answer: 'LVIII'
  },
  {
    input: 1994,
    answer: 'MCMXCIV'
  }
];

const solution = (input: any) => {
  const valMap: any = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ];

  let result = '';

  const repeat = (sym: any, times: any) => {
    let ret = '';
    for (let i = 0; i < times; i++) {
      ret += sym;
    }
    return ret;
  };

  valMap.forEach((entry: any, idx: any) => {
    const rom = entry[0];
    const num = entry[1];
    const next = valMap[idx - 1] || ['', 0];

    if (input % num !== input) {
      while (true) {
        if (input < num) break;
        let rem = (input % next[1]) - next[1];
        if (rem > next[1] * -1 && rem < 0) {
          result += repeat(rom, rem * -1) + next[0];
          input = input - next[1] + num;
        } else {
          result += rom;
          input = input - num;
        }
      }
    }
  });

  return result;
};

const options: RunOptions = {
  problemName: 'Number to Roman',
  printInput: false
  // runCases: [2]
};

run(solution, testcases, options);
