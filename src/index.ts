import path from 'path';
import fs from 'fs';
import { program } from 'commander';
import { getDLLpathsFromCsprojFiles } from './libs/csprojHelper';
import { run } from './libs/utility';

/**
 * CLI
 *  - mock (boolean: False not affect to file)
 *  - csproj files (stirng:[] )
 *
 * Method:
 *
 * cp
 *  "${{ github.workspace }}\packages\System.Runtime.CompilerServices.Unsafe.5.0.0\lib\net45\System.Runtime.CompilerServices.Unsafe.dll"
 *  "${{ env.publish_path }}/Bin"
 *  */

program
  .description('An application for helping to copy the missing dll from .csproj files')
  .option('-i, --csproj-paths [value...]', 'Array of .csproj paths')
  .option('-o, --output-dir <directory>', 'output directory')
  .option('-b, --base-dir <directory>', 'base directory of csproj file')
  .option('-m, --mock', 'Enable mock mode')
  .option('-v, --verbose', 'Enable verbose mode');

program.parse();

const opts = program.opts();
const options = {
  mockMode: opts.mock ? true: false,
  verboseMode: opts.verbose ? true: false,
  csprojPaths: opts?.csprojPaths || [],
  outputDir: opts?.outputDir || '.',
  baseDir: opts?.baseDir || '.',
}

// console.log('Options: ', program.opts());

async function main() {
  console.log("Starting to copy the missing dll from .csproj files ...")
  const dllPaths = await getDLLpathsFromCsprojFiles(options.csprojPaths);
  for (const dllPath of dllPaths){
    const targetPath = path.resolve(options.outputDir, path.basename(dllPath));
    if(options.verboseMode) console.log(`checking... ${targetPath}`);
    if(!fs.existsSync(targetPath)){
      const command = `cp ${path.resolve(options.baseDir, dllPath)} ${options.outputDir}`;
      // console.log(command)
      if(options.mockMode) continue;
      await run(command, !options.verboseMode);
    } else {
      if(options.verboseMode) console.log(`Skip... ${targetPath}`);
    }
  }
}

main();
