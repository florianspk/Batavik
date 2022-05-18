#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const siege = require('siege');

const options = {
  serviceName: argv['service-name'] || 'Unknow',
  port: argv['port'] || 8080,
  path: argv['path'] || '/',
  method: argv['method'] || 'GET',
  body: argv['body'] || null,
  concurrent: argv['concurrent'] || 15,
};

(async () => {
  if (options.method === 'GET') get();
  else if (options.method === 'POST') post();
})();

function get() {
  process.stdout.write('Attacking service ' + options.serviceName + ' on port ' + options.port + '\n');
  siege()
    .on(options.port)
    .get(options.path).for(2).seconds
    .concurrent(options.concurrent)
    .attack();
}

function post() {
  process.stdout.write('Attacking service ' + options.serviceName + ' on port ' + options.port + '\n');
  siege()
    .on(options.port)
    .post(options.path, options.body).for(2).seconds
    .concurrent(options.concurrent)
    .attack();
}