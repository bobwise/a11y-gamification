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
          "question": "What are the benefits of accessibility for our clients?",
          "answers": [
            { "answer": "Accessibility empowers people with permanent disabilities.", "correct": false },
            { "answer": "Accessibility supports all people when they experience temporary and situational disabilities.", "correct": false },
            { "answer": "Accessibility improves user experience for people with poor internet access.", "correct": false },
            { "answer": "Accessibility improves people's lives as they age.", "correct": false },
            { "answer": "Accessibility streamlines user experience for everyone!", "correct": false },
            { "answer": "All of the above", "correct": true },
          ],
          "points": 50
        },
        {
          "id": 2,
          "question": "What are the benefits of accessibility for our organization?",
          "answers": [
            { "answer": "Accessibility helps us do the right thing for every client, every time!", "correct": false },
            { "answer": "Accessibility improves Public Perception of our organization.", "correct": false },
            { "answer": "Accessibility increases compatibility of our products.", "correct": false },
            { "answer": "Accessibility improves Search Engine Optimization.", "correct": false },
            { "answer": "Accessibility increases our reach and customer base.", "correct": false },
            { "answer": "Accessibility Increases Our Eligibility for Funding.", "correct": false },
            { "answer": "Accessibility helps us Avoid Lawsuits.", "correct": false },
            { "answer": "All of the above", "correct": true },
          ],
          "points": 50
        },
        {
          "id": 3,
          "question": "What are the benefits of accessibility for our team members?",
          "answers": [
            { "answer": "Accessibility empowers diverse talent.", "correct": false },
            { "answer": "Accessibility improves team member productivity.", "correct": false },
            { "answer": "Accessibility helps accommodate to the needs of different learning types.", "correct": false },
            { "answer": "Accessibility makes learning tools and environments more inclusive.", "correct": false },
            { "answer": "All of the above", "correct": true },
          ],
          "points": 50
        },
        {
          "id": 4,
          "question": "What percentage of the population has a permanent disability?",
          "answers": [
            { "answer": "5%", "correct": false },
            { "answer": "10%", "correct": false },
            { "answer": "15%", "correct": false },
            { "answer": "20%", "correct": true },
          ],
          "points": 50
        },
        {
          "id": 5,
          "question": "True or False: Glasses, contacts and screen readers are considered assistive technology.",
          "answers": [
            { "answer": "True", "correct": true },
            { "answer": "False", "correct": false },
          ],
          "points": 50
        },
        {
          "id": 6,
          "question": "What are the four principles of web accessibility?",
          "answers": [
            { "answer": "Perfect, Outstanding, UX-proof and Radically new.", "correct": false },
            { "answer": "Has a great look and feel, Has smooth scrolling, Has readable text and Does not have too many objects inside the viewport", "correct": false },
            { "answer": "Perceivable, Operable, Understandable and Robust", "correct": true },
            { "answer": "Programmatically correct, Ordered, Usable and Readable", "correct": false },
          ],
          "points": 50
        },
        {
          "id": 7,
          "question": "Which statement is true?",
          "answers": [
            { "answer": "For people with disabilities, the Internet is an obstacle that cannot be overcome even with assistive technology.", "correct": false },
            { "answer": "The term “assistive technology” applies only to computer use and Internet access.", "correct": false },
            { "answer": "The Internet is an important part of the solution for disability access.", "correct": true },
            { "answer": "Making a website accessible to people with disabilities makes it less accessible for other users.", "correct": false },
          ],
          "points": 50
        },
        {
          "id": 8,
          "question": "Who uses assistive technology?",
          "answers": [
            { "answer": "People who wear glasses or contact lenses", "correct": false },
            { "answer": "People who wear hearing aids", "correct": false },
            { "answer": "People with motor disabilities", "correct": false },
            { "answer": "All of the above", "correct": true },
          ],
          "points": 50
        },
        {
          "id": 9,
          "question": "True or False: There are many forms of disabilities that are not obvious to an observer.",
          "answers": [
            { "answer": "True", "correct": true },
            { "answer": "False", "correct": false },
          ],
          "points": 50
        },
        {
          "id": 10,
          "question": "Universal Design for the Web is meant to produce websites accessible for:",
          "answers": [
            { "answer": "Older people", "correct": false },
            { "answer": "People without disabilities", "correct": false },
            { "answer": "People with disabilities", "correct": false },
            { "answer": "All of the above", "correct": true },
          ],
          "points": 50
        },
        {
          "id": 11,
          "question": "Which of the following is an example of good link text?",
          "answers": [
            { "answer": "Click Here", "correct": false },
            { "answer": "Read More...", "correct": false },
            { "answer": "Products and Services", "correct": true },
          ],
          "points": 50
        },
        {
          "id": 12,
          "question": "Using meaningful link text is important because:",
          "answers": [
            { "answer": "Poorly labeled link text will take users to the wrong page.", "correct": false },
            { "answer": "Poorly labeled links won’t be clickable.", "correct": false },
            { "answer": "When screen reader users hear poor link text out of context they won’t know where the link goes.", "correct": true },
          ],
          "points": 50
        },
        {
          "id": 13,
          "question": "Which is NOT an example of a way to make audio accessible to a deaf person?",
          "answers": [
            { "answer": "Audio Descriptions", "correct": false },
            { "answer": "Captions", "correct": false },
            { "answer": "Color Coding", "correct": true },
            { "answer": "Transcripts", "correct": false },
          ],
          "points": 50
        },
        {
          "id": 14,
          "question": "True or False: Good Alternative Text makes images accessible to a blind person.",
          "answers": [
            { "answer": "True", "correct": true },
            { "answer": "False", "correct": false },
          ],
          "points": 50
        },
        {
          "id": 15,
          "question": "What version of web accessibility guidelines is referenced in Spark Design System?",
          "answers": [
            { "answer": "WCAG 1.1, Level A", "correct": false },
            { "answer": "WCAG 2.1, Level AA", "correct": true },
            { "answer": "WCAG 2.2, Level AAA", "correct": false },
            { "answer": "WCAG3.0", "correct": false },
          ],
          "points": 50
        },
        {
          "id": 16,
          "question": "What is NOT one of the main accessibility principles?",
          "answers": [
            { "answer": "Operable", "correct": false },
            { "answer": "Robust", "correct": false },
            { "answer": "Perceivable", "correct": false },
            { "answer": "Repeatable", "correct": true },
            { "answer": "Understandable", "correct": false },
          ],
          "points": 50
        },
        {
          "id": 17,
          "question": "ARIA means:",
          "answers": [
            { "answer": "Accessible Rich Internet Architecture", "correct": false },
            { "answer": "Accessible Rich Internet Access", "correct": false },
            { "answer": "Accessible Rich Internet Applications", "correct": true },
            { "answer": "Accessible Right Internet Application", "correct": false },
          ],
          "points": 50
        },
        {
          "id": 18,
          "question": "True or False: Links must be visually distinguishable from the surrounding non-link text.",
          "answers": [
            { "answer": "True", "correct": true },
            { "answer": "False", "correct": false },
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
    var randomNum = Math.floor(Math.random() * this.state.questions.length);
    this.setState({

      "unansweredQuestions": this.state.questions,
      "currentQuestion": this.state.questions[randomNum], // this should be chosen randomly
      "gameInProgress": true,
    });
  }

  answerQuestion(questionId, answer) {
    var randomNum = Math.floor(Math.random() * 18);
    const theQuestion = this.state.unansweredQuestions.filter(question => question.questionId === questionId);
    if (answer.correct) {
      this.setState({ "score": this.state.score + 50 }) // get the correct point value from state
      // move that question to answeredQuestions
      var joined = this.state.answeredQuestions.concat(questionId);
      this.setState({answeredQuestions: joined})


      // console.log("unansweredQuestions");

      // update the house

      this.setState({ "currentQuestion": this.state.questions[randomNum] }); // this should be chosen randomly
    } else {
      // shuffle that question back into the deck
      var joined2 = this.state.unansweredQuestions.concat(questionId);
      this.setState({unansweredQuestions: joined2})
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
      "bg_level_1": gameInProgress,
      "bg_title": !gameInProgress && !gameEnded,
      "bg_game_over": gameEnded,
    });

    const houseClassNames = classNames({
      "House": true,
      "house_progress_1": score > 25,
      "house_progress_2": score > 50,
      "house_progress_3": score > 75,
    });

    return (
      <div className={appClassNames}>
        
        <SprkHeading
          element="h1"
          variant="displayTwo"
          isPageTitle
        >
          AccessiBilly
        </SprkHeading>


        Score: {score}


        {!gameInProgress && !gameEnded &&
          <div>
            <SprkButton onClick={this.startGame}>Start the game!</SprkButton>
          </div>
        }


        {gameInProgress &&
          <>
            <div className={houseClassNames}></div>

            <div>
              <p>{currentQuestion.question}</p>

              {
                currentQuestion.answers.map((answer) => {
                  return (
                    <SprkButton additionalClasses="answerButton" onClick={() => { this.answerQuestion(currentQuestion.id, answer) }}> {answer.answer}</SprkButton>
                  )
                })
              }

              <div>
                <SprkButton additionalClasses="endButton" variant="tertiary" onClick={this.finishGame}>End the game</SprkButton>
              </div>
            </div>
          </>
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
