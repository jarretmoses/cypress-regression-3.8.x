/* eslint-disable  @typescript-eslint/no-var-requires, no-console */
const { exec: synchronousExec } = require('child_process');
const { promisify } = require('util');
const { bgRed } = require('chalk');

const exec = promisify(synchronousExec);

(async () => {
  try {
    await exec('rm -rf .cert');
    await exec('mkdir .cert');
    await exec('mkcert -install; mkcert localhost');
    await exec('touch ./.cert/server.pem');
    await exec('cat localhost.pem localhost-key.pem > ./.cert/server.pem');
    await exec('rm -f localhost.pem; rm -f localhost-key.pem');
  } catch (err) {
    console.error(bgRed(`ERROR: ${err.message}`));
    process.exit(1);
  }
})();
