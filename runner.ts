// Optional options to run the test 'suite'. Mostly for output options.
export type RunOptions = {
  problemName?: string;
  printInput?: boolean;
  printTestResults?: boolean;
  printStatistics?: boolean;
  runCases?: number[];
};

// The function to run - the code which actually solves the problem
type Solution = (args: any) => any;

// An array of inputs and their respective answers. Each entry constitutes a 'test case'.
type TestCase = { input: any; answer: any };

const defaultOptions: RunOptions = {
  problemName: undefined,
  printInput: false,
  printTestResults: true,
  printStatistics: true,
  runCases: undefined
};

const getStatus = (error: any, failed: boolean) => {
  if (error) return 'ERRORED';
  else if (failed) return 'FAILED';
  else return 'PASSED';
};

const log = (input: any) => {
  process.stdout.write(input);
};

export const run = (
  solution: Solution,
  testcases: TestCase[],
  options: RunOptions = defaultOptions
) => {
  const numCases = testcases.length;

  // Print header
  console.log(
    `=========== RUNNING [${
      options?.runCases ? options.runCases.length + '/' : ''
    }${numCases}] testcases ${
      options?.problemName ? 'for problem: ' + options.problemName : ''
    } ===========\n`
  );

  // Run each test case
  for (var i = 0; i < numCases; i++) {
    if (options?.runCases?.length && !options?.runCases.includes(i + 1)) continue;

    const testcase = testcases[i];
    let result: any = undefined;
    let error: any = undefined;
    let failed: boolean = false;

    // Run the test case and record result and/or error
    try {
      result = solution(testcase.input);
      failed = result !== testcase.answer;
    } catch (e) {
      error = e;
    }

    // Print results and helpful output
    console.log(`[${i + 1}/${numCases}]: ${getStatus(error, failed)}`);

    if (options?.printInput || error || failed) {
      log('  Input: ');
      console.log(testcase.input);
    }

    if (options?.printTestResults || error || failed) {
      log(`  Expected: `);
      console.log(testcase.answer);
      log(`  Actual:   `);
      console.log(result);
    }

    if (error) console.log(error);
    console.log('');
  }

  // Print overall statistics, if desired
  if (options?.printStatistics) {
    console.log('Statistics!');
  }
};
