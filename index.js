const chalk = require('chalk')
const readlineSync = require('readline-sync')
const printHeading = () =>
  console.log(
    `
 _ _ _ _____ __    _____ _____ _____ _____    _____ _____    _____ _____ _____ 
| | | |   __|  |  |     |     |     |   __|  |_   _|     |  |_   _|  |  |   __|
| | | |   __|  |__|   --|  |  | | | |   __|    | | |  |  |    | | |     |   __|
|_____|_____|_____|_____|_____|_|_|_|_____|    |_| |_____|    |_| |__|__|_____|
                                                                               
 _____ _____ _____ _____    _ _ _ _____ _____ _____    _____ _____ _____ _____ 
|   __|_   _|  _  | __  |  | | | |  _  | __  |   __|  |     |  |  |     |__   |
|__   | | | |     |    -|  | | | |     |    -|__   |  |  |  |  |  |-   -|   __|
|_____| |_| |__|__|__|__|  |_____|__|__|__|__|_____|  |__  _|_____|_____|_____|
                                                         |__|                  
`
  )
printHeading()

const { quizData, answers } = require('./data')

const username = readlineSync.question(chalk.blue('What should we call you? '))
console.log(
  chalk.yellow(`Hey ${username}\nHope your're having a great day\nLet's play this quiz and see how well do you know Star Wars 🚀
`)
)

/**
 *
 * Flow of the application
 * 1. Take the user input
 * 2. Greet the user
 * 3. Run a loop on questions
 * 4. Take answer as input
 * 5. Compare the answer with answers array
 * 6. If the answer matches with answer array then increment the score
 */

// Score declaration
let score = 0

// Answers and questions template
const correctAnswer = () => {
  score += 5
  console.log(
    chalk.green(`\nYou're absolutely right 😄\nYour current score is: ${score}`)
  )
}

const wrongAnswer = () =>
  console.log(chalk.red(`\nWrong answer 😢\nYour current score is ${score}`))

const nextQuestion = () =>
  console.log(chalk.yellow('\nLets proceed with next Question!!!'))

const results = () =>
  score === 50
    ? console.log(
        chalk.bgGreen.black(
          `\n Final Score: ${score}\nCongrats ${username} 🎉 you hit the high score \nLooks like you know me very well 😆 `
        )
      )
    : console.log(
        chalk.bgBlue.black(
          `\n Final Score: ${score}\nThanks for playing ${username}.😃 `
        )
      )

// Questions loop
for (let i = 0; i < quizData.length; i++) {
  let answer = readlineSync.question(
    chalk.blue(quizData[i].question, quizData[i].answers)
  )
  if (answer == answers[i]) {
    correctAnswer()
  } else {
    wrongAnswer()
  }
  i < 9 ? nextQuestion() : results()
}
