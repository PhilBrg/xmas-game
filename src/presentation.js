import { XmasGame } from './assets/xmas'

// import slides
import Answer from './slides/answers/answer'
import Multiples from './slides/questions/multiples'
import Single from './slides/questions/single'
import Rules from './slides/rules'
import Intro from './slides/intro'
import End from './slides/end'
import Menu from './slides/menu'

import { gameActions } from './redux/actions'
import store from './redux/store'

import React from 'react'
import { connect } from 'react-redux'
import { Deck } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'



// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    white: '#ffffff',
    black: '#1F2022',
    lightRed: '#ff7878',
    red: '#ff0000',
    lightGreen: '#74d680',
    green: '#378b29',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

class Presentation extends React.Component {
  constructor() {
    super()

    this.state = {
      games: XmasGame.games.filter(game => game.weight > -1),
      xmas: XmasGame,
    }

    store.subscribe(() => this.setState({ score: store.getState().score, step: store.getState().step }))
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    if (this.props.step.currentGame) {
      const currentGame = this.state.games.find(game => game.__typename === this.props.step.currentGame)
      const score = currentGame.score
      switch (e.which) {
        case 81:
          this.props.updateScoreTeam1({score})
          break
        case 77:
          this.props.updateScoreTeam2({score})
          break
        default:
          null
      }
    }
  }

  updateGameStep = (index) => {
    this.props.updateGameStep({index})
  }

  updateCurrentGameName = (game) => {
    this.props.updateCurrentGameName({game})
  }

  updateScoreTeam1 = (score) => {
    this.props.updateScoreTeam1(score)
  }

  updateScoreTeam2 = (score) => {
    this.props.updateScoreTeam2(score)
  }

  renderGame() {
    const games = this.state.games
    const slides = []

    games.map((game) => {
      slides.push(Rules({
                          rules: game.rules,
                          fname: () => this.props.updateCurrentGameName({game}),
                        })
                  )
      return game.questions.map((question, index) => {
        if (question.multiple === true) {
          slides.push(Multiples({
                                  question: question.name,
                                  choices: question.choices,
                                  fstep: () => this.props.updateGameStep({index}),
                                  currentGame: this.props.step.currentGameName,
                                  score: this.props.score
                                })
                      )
          slides.push(Answer({
                              answer: question.answer,
                              currentGame: this.props.step.currentGameName,
                              score: this.props.score
                            })
                      )
        } else {
          slides.push(Single({
                              question: question.name,
                              fstep: () => this.props.updateGameStep({index}),
                              currentGame: this.props.step.currentGameName,
                              score: this.props.score
                            })
                      )
          slides.push(Answer({
                              answer: question.answer,
                              currentGame: this.props.step.currentGameName,
                              score: this.props.score
                            })
                      )
        }
        return
      })
    })
    return (slides)
  }

  render() {
    const { title, created_by, games } = this.state.xmas

    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        ref={this.deck}
      >
        {Intro({ title: title, created_by: created_by })}
        {Menu({ games: games })}
        {this.renderGame()}
        {End()}

      </Deck>
    );
  }
}

const mapStateToProps = state => ({
  score: state.xmas.score,
  step: state.xmas.step,
})

const mapDispatchToProps = dispatch => ({
  updateGameStep: (index) => dispatch(gameActions.updateGameStep(index)),
  updateCurrentGameName: (game) => dispatch(gameActions.updateGameName(game)),
  updateScoreTeam1: (score) => dispatch(gameActions.scoreTeam1(score)),
  updateScoreTeam2: (score) => dispatch(gameActions.scoreTeam2(score)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Presentation)
