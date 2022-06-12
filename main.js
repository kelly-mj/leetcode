const fs = require('fs');
const { exec } = require('child_process');

const inputFilename = process.argv[2];

if (!inputFilename) {
  console.log(`Error: Please provide a filename!\n`);
  console.log(`Sample usage: npm run solve 3sum`);
}

const getMatchingFile = (inputFilename) => {
  return getMatchingFileWithPath(process.cwd(), inputFilename);
};

const getMatchingFileWithPath = (dirPath, inputFilename) => {
  let files = fs.readdirSync(dirPath);

  for (let file of files) {
    const qualified = dirPath + '\\' + file;

    if (!fs.statSync(qualified).isDirectory()) {
      if (inputFilename + '.ts' === file) return qualified;
    } else if (file !== '.git' && file !== 'node_modules') {
      const search = getMatchingFileWithPath(qualified, inputFilename);
      if (search) return search;
    }
  }
};

const tsRunner = (qualifiedFile) => {
  exec(`npx ts-node ${qualifiedFile}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
};

tsRunner(getMatchingFile(inputFilename));
