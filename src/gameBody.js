import readlineSync from 'readline-sync';
import greeting from './cli.js';

const gameBody = (description, taskFunk) => {
  const playerName = greeting();
  console.log(description);

  let mark = 0;
  for (let i = 1; i <= 3; i += 1) {
    const step = taskFunk();

    console.log(`Question ${step[0]}`);
    const answer = readlineSync.question('Answer: ');

    if (answer === step[1]) {
      console.log('Corret!');
      mark += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${step[1]})`);
      console.log(`Lets's try again, ${playerName}`);
      break;
    }
  }

  if (mark === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default gameBody;
