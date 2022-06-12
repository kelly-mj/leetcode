const fs = require('fs');

var qualifiedFile = undefined;

const write = (input) => {
  fs.appendFileSync(qualifiedFile, input);
  fs.appendFileSync(qualifiedFile, '\n');
};

const openFile = (newQualifiedFile) => {
  qualifiedFile = newQualifiedFile;
  fs.open(qualifiedFile, 'w', (err) => {
    if (err) throw err;
  });
};

const camelCase = (str) => {
  const temp = str
    .split(/\W/)
    .reduce((p, c) => (p += `${c[0].toUpperCase()}${c.slice(1)}`), '');
  return temp[0].toLowerCase() + temp.slice(1);
};

const titlize = (str) => {
  if (str.match(/w/)) {
    return str
      .split(/(?=[A-Z])/)
      .map((s) => s.toUpperCase())
      .join(' ');
  } else {
    return str
      .split(/\W/)
      .map((s) => s.toUpperCase())
      .join(' ');
  }
};

module.exports = {
  write,
  openFile,
  titlize,
  camelCase
};
