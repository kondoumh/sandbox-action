const process = require('process');
const cp = require('child_process');
const path = require('path');

test('test runs', () => {
  process.env['INPUT_WHO-TO-GREET'] = 'Hoge';
  const ip = path.join(__dirname, 'dist/index.js');
  console.log(cp.execSync(`node ${ip}`).toString());
})
