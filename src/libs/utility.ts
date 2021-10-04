const { spawn } = require('promisify-child-process');

export async function run(command: string, slient = false) {
  const commandSplits = command.split(' ');
  const spawnCommand = commandSplits[0];
  const spawnArgs = commandSplits.slice(1);
  if(!slient) console.debug(`Executing... ${command}`);
  const childProcess = spawn(spawnCommand , spawnArgs, {encoding: 'utf8', maxBuffer: 200 * 1024} );

  childProcess.stdout.on('data', function (data: any) {
    console.log('stdout: ' + data.toString());
  });

  childProcess.stderr.on('data', function (data: any) {
    console.log('stderr: ' + data.toString());
  });

  childProcess.on('exit', function (code: any) {
    if(!slient) console.log('child process exited with code ' + code);
    if(code == 0) {
      console.log(`[Success] ${command}`);
    } else {
      console.log(`[Error] ${command}`);
    }
  });

  const { stdout, stderr, code } = await childProcess;
}


