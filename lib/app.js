const { program } = require('commander');
const packageJson = require('../package.json');
const exec = require('child_process').exec
const chalk = require('chalk');
const path = require('path');
const projectName = path.parse(__dirname).name;

// let Progress = require('progress'),
//   bar = new Progress('running [:bar] :percent :etas', {
//     complete: '=',
//     incomplete: ' ',
//     width: 20,
//     total: 1
//   })

program.usage('[option]');

program
  .command('init')
  .version(packageJson.version)
  .usage('[-b]')
  .description('initialize')
  .option('-b, --browse', 'open browser', false)
  .action(() => {
    console.log(chalk.green('start progress!!'));
    exec('git init');
    exec(`echo "# ${projectName}" > README.md`);
    exec('git add README.md');
    exec('git commit -m "first commit"');
    exec(`gh repo create "${projectName}" -y -d "${projectName}"`);
    exec('git push -u origin master');
  })
  .parse(process.argv);

if (program.opts().browse) {
  console.log(program.opts().browse);
  exec('gh browse');
}

program.command('*', { hidden: true }).action(() => {
  console.log(chalk.red('Command not supported!'));
  program.help();
});

