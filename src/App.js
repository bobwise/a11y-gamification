import React, { Component } from 'react';
import classNames from 'classnames';
import { SprkHeading, SprkButton } from '@sparkdesignsystem/spark-react';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "unansweredQuestions": [],
      "answeredQuestions": [],
      "currentQuestion": {},
      "score": 0,
      "gameInProgress": false,
      "questions": [
        {
          "id": 1,
          "question": "What is 2 + 2?",
          "answers": [
            { "answer": "1", "correct": false },
            { "answer": "2", "correct": false },
            { "answer": "3", "correct": false },
            { "answer": "4", "correct": true },
          ],
          "points": 50
        },
        {
          "id": 2,
          "question": "Another question",
          "answers": [
          ],
          "points": 50
        },
      ]
    };

    this.startGame = this.startGame.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.finishGame = this.finishGame.bind(this);
  }

  startGame() {
    this.setState({
      "unansweredQuestions": this.state.questions,
      "currentQuestion": this.state.questions[0], // this should be chosen randomly
      "gameInProgress": true,
    });
  }

  answerQuestion(questionId, answer) {
    if (answer.correct) {
      this.setState({ "score": this.state.score + 50 }) // get the correct point value from state
      // move that question to answeredQuestions
      // update the house

      this.setState({ "currentQuestion": this.state.questions[1] }); // this should be chosen randomly
    } else {
      // shuffle that question back into the deck
      // update the score and house?
      // go to the next question
    }
  }

  getNextQuestion() {
    // if there are no more questions, end the game
    // else
    // randomly choose a question from unansweredQuestions
  }

  finishGame() {
    this.setState({ gameEnded: true, gameInProgress: false });
    // high score?
    // send an email?
    // victory screen?
  }

  render() {

    const {
      gameInProgress,
      gameEnded,
      currentQuestion,
      score,
    } = this.state;

    /**
     * As the player score goes up, different CSS classes are applied to the app.
     * We can use this to apply different background images for higher scores.
     */
    const appClassNames = classNames({
      "App": true,
      "bg_level_1": score > 25,
      "bg_level_2": score > 50,
      // etc
    });

    return (
      <div className={appClassNames}>
        <SprkHeading
          element="h1"
          variant="displayTwo"
          isPageTitle
        >
          Accessibilly
        </SprkHeading>


        Score: {score}


        {!gameInProgress && !gameEnded &&
          <div>
            <SprkButton onClick={this.startGame}>Start the game!</SprkButton>
          </div>
        }


        {gameInProgress &&
          <div>
            <p>{currentQuestion.question}</p>
            {currentQuestion.answers[0] &&
              <SprkButton onClick={() => { this.answerQuestion(currentQuestion.id, currentQuestion.answers[0]) }}> {currentQuestion.answers[0].answer}</SprkButton>
            }
            {currentQuestion.answers[1] &&
              <SprkButton onClick={() => { this.answerQuestion(currentQuestion.id, currentQuestion.answers[1]) }}> {currentQuestion.answers[1].answer}</SprkButton>
            }

            {currentQuestion.answers[2] &&
              <SprkButton onClick={() => { this.answerQuestion(currentQuestion.id, currentQuestion.answers[2]) }}> {currentQuestion.answers[2].answer}</SprkButton>
            }

            {currentQuestion.answers[3] &&
              <SprkButton onClick={() => { this.answerQuestion(currentQuestion.id, currentQuestion.answers[3]) }}> {currentQuestion.answers[3].answer}</SprkButton>
            }

            <div>
              <SprkButton onClick={this.finishGame}>End the game</SprkButton>
            </div>
          </div>
        }



        {gameEnded &&
          <div>
            Game Over
          </div>
        }
      </div>
    );
  }
}

export default App;
