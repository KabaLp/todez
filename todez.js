#! /usr/bin/env node

console.log("todez:");
if (process.argv.length <= 2) {
  console.log('todez version: ' + require('./package.json').version);
  console.log('use "$ todez <hex number>" to convert do dezimal byte style array');
  console.log('use "$ todez <hex number>" -o to open the reult in notepad)');
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
    require('fs').writeFile('result.txt', hexNumbers, function (err) {
      if (err) {
        console.log(err);
      } else if (process.argv.length > 3) {
        require('child_process').exec('notepad.exe result.txt');
      } else {
        console.log('finished --> see file: result.txt');
      }
    });
  }
}