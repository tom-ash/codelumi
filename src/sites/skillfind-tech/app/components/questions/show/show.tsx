import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const answers = [
  'To install new npm packages globally.',
  'To start the Node.js REPL (Read-Eval-Print Loop).',
  'To run the tests defined in the project.',
  'To start the application as defined in the "scripts" section of the package.json file.',
]

const QuestionsShow = () => {
  useStyles(styles)

  return (
    <div id='questions-show'>
      <h1>
        npm start
      </h1>
      <div className='question-body'>
        What is the purpose of the "npm start" command in a Node.js project?
      </div>
      <div className='hint'>
        <h2>
          Hint
        </h2>
        <a href='https://docs.npmjs.com/cli/v7/commands/npm-start'>
          https://docs.npmjs.com/cli/v7/commands/npm-start
        </a>
      </div>
      <div className='answers'>
        <ul>
          {answers.map(answer => {
            return (
              <li>
                {answer}
              </li>
            )
          })}

        </ul>
      </div>

      <div className='explanation'>
        <h2>
          Explanation
        </h2>
        <div className='body'>
          The "npm start" command is a script defined in the "scripts" section of the package.json file in a Node.js project. This script is typically used to start the application. When you run "npm start," npm looks for a script named "start" in the "scripts" section and executes the command specified there. It is a common convention to use "npm start" for starting the main application in a project. This is particularly useful for web applications, servers, or any other Node.js application where starting the application is a common task during development or deployment.
        </div>
      </div>


      {/* https://docs.npmjs.com/cli/v7/commands/npm-start */}
      

      
    </div>
  )
}

export default QuestionsShow
