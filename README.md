This is an example of my setup and cypress failing with version 3.8.1. My setup uses Create React App with local SSL running by use of `mkcert` and injecting the created cert file into webpack before starting the dev server. My local tests simply run on the url my local app runs.

## Setup Env and Run Tests
- `brew install mkcert`
- `npm install`
- npm run `create-local-cert`
- `npm start`
- `npm run cy:open`
- click `example.test.ts` and see the error occur `ERR_SSL_PROTOCOL_ERROR (-107) loading 'https://localhost:59152/__/#/tests/integration/example.test.ts'`
- Then install cypress `3.7.0` rerun tests and notice they work fine

Note: with this setup your localhosts may always try and redirect to `https` even if you don't want it to which can be annoying. Follow the `The Solution` section [here](https://www.codeproject.com/Articles/1010667/SSL-Connection-Error-When-Debugging-via-Localhost) to remove that problem
