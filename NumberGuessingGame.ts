function guessGame(guessNumber: number):void {
    let answer: number = Math.floor(Math.random()*10)+1;
      if (guessNumber === answer) {
         console.log(`You have guessed the right number which was ${answer}!`);
      } else 
         console.log(`Wrong, the answer was ${answer} try again!`);
}

guessGame(8);