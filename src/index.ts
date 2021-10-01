import path from 'path';
import fs, { write } from 'fs';
import { promisify } from 'util';
import { stripIndent } from 'common-tags';
import { run } from './libs/utility';
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const defaultUnicode = 'utf8';
const tmpDir = 'tmp';

// Mock mode is not affect with remote repo.
let MOCK_MODE = false;
const firstArg = process.argv[2];
if(firstArg === 'mock'){
  MOCK_MODE = true;
}

console.log(`Running migrate-gitlab-2-github [mode] MOCK_MODE: ${MOCK_MODE}`);

async function main(){

}

main();
