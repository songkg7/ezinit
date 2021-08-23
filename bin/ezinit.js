#!/usr/bin/env node

const { program } = require('commander');
const packageJson = require('../package.json');
const execSync = require('child_process').execSync;
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
  .usage('[-b] <-n|--name> [-d|--description]')
  .description('initialize git project to github')
  .requiredOption('-n, --name <name>', 'Github repository name')
  .option('-d, --description <description>', 'Repository description', 'created By EZinit')
  .option('-b, --browse', 'open browser', false)
  .action((options) => {
    console.log(chalk.green('start') + " progress...");
    execSync('git init');
    execSync(`echo "# ${options.name}" > README.md`);
    execSync('git add README.md');
    execSync('git commit -m "first commit"', {
      timeout: 10000
    });
    execSync(`gh repo create "${options.name}" -y -d "${options.description}" --public`, {
      timeout: 30000
    });
    execSync('git push -u origin master');
    console.log(chalk.green("complete!"))
  })
  .parse(process.argv);

if (program.opts().browse) {
  console.log(program.opts().browse);
  execSync('gh browse');
}

program.command('*', { hidden: true }).action(() => {
  console.log(chalk.red('Command not supported!'));
  program.help();
});
