#! /usr/bin/env node

if (process.argv.length <= 2) {
  console.log('todez version: ' + require('./package.json').version);
  console.log('use "$ todez <hex number>" to convert to decimal byte style array');
  console.log('use "$ todez <hex number>" -f to write the result to a file)');
  console.log('use "$ todez <hex number>" -fo to open the result.txt file in notepad)');
} else {
  var key = process.argv[2];
  if (key.length % 2) {
    console.log('need an even number of chars!');
  } else {
    var hexNumbers = [];
    for (var i = 0; i < key.length-1; i = i+2) {
      hexNumbers.push(parseInt((key[i] + key[i+1]), 16));
    }
    console.log('\n' + hexNumbers + '\n');
    if (process.argv.length > 3 && process.argv[3].length > 0) {
      require('fs').writeFile('result.txt', hexNumbers, function (err) {
        if (err) {
          console.log(err);
        } else if (process.argv[3].length > 2) {
          require('child_process').exec('notepad.exe result.txt');
        } else {
          console.log('finished --> see file: result.txt');
        }
      });
    }
  }
}