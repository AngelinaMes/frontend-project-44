#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (n) => n % 2 === 0;

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Corect!');
      correctAnswerCount += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}`);
    }
  }

  console.log(`Congratulations, ${userName}`);
};

playGame();
