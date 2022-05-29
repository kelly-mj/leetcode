import { run } from '../runner';

const testcases = [
  {
    input: 123,
    answer: 321
  },
  {
    input: -123,
    answer: -321
  },
  {
    input: 120,
    answer: 21
  }
];

const options = {
  problemName: 'Reverse Integer',
  printInput: true
};

const solution = (x: number) => {
  let positive = x >= 0;
  let newNum = 0;
  const threshold = Math.pow(2, 31);

  x = Math.abs(x);

  while (x > 0) {
    const n = x % 10;
    x = Math.floor(x / 10);
    newNum = newNum * 10 + n;

    if (newNum > threshold) {
      return 0;
    }
  }

  return newNum * (positive ? 1 : -1);
};

run(solution, testcases, options);
