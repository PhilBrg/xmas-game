import { XmasGame } from './assets/data/xmas'

// import slides
import Answer from './slides/answers/answer'
import Multiples from './slides/questions/multiples'
import Single from './slides/questions/single'
import Rules from './slides/rules'
import Intro from './slides/intro'
import End from './slides/end'
import Menu from './slides/menu'
import Team from './slides/team'
import EndGame from './slides/endGame'
import Score from './slides/score'

import { gameActions } from './redux/actions'
import store from './redux/store'

import React from 'react'
import { connect } from 'react-redux'
import { Deck } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

// assets
// import eddy_malou from './assets/sound/eddy-malou.mp3'
// import inception from './assets/sound/inception.mp3'
// import navi from './assets/sound/navi.wav'


// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    black: '#1F2022',
    green20: '#74d680',
    green40: '#02ad57',
    green60: '#02934B',
    green80: '#0c7D21',
    red40: '#ef3D46',
    white: '#ffffff',
    yellow: '#fcb12a',
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
      teams: XmasGame.teams,
      xmas: XmasGame,
    }

    store.subscribe(() => this.setState({ scores: store.getState().scores, step: store.getState().step }))
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    switch (e.which) {
      // Z
      case 90:
        console.log('Z key triggered')
        break
      // E
      case 69:
        console.log('E key triggered')
        break
    }
    if (this.props.step.currentGame) {
      const currentGame = this.state.games.find(game => game.__typename === this.props.step.currentGame)
      const score = currentGame.score

      switch (e.which) {
        // 'A'
        case 65:
          this.props.ScoreTeam({ id: '1', score })
          break
        // 'Q'
        case 81:
          this.props.UnScoreTeam({ id: '1' })
          break
        // 'P'
        case 80:
          this.props.ScoreTeam({ id: '2', score })
          break
        // 'M'
        case 77:
          this.props.UnScoreTeam({ id: '2' })
          break
        default:
          return null
      }
    }
  }

  renderEndGame() {
    const game = this.state.games.find(game => game.__typename === 'turkey_of_the_dead')
    const slides = []

    slides.push(Rules({
                        currentGame: this.props.step.currentGameName,
                        currentGameType: this.props.step.currentGame,
                        fname: () => this.props.updateCurrentGameName({game}),
                        rules: game.rules,
                        scores: this.props.scores
                      })
                )
    slides.push(EndGame())

    return (slides);
  }

  renderGame() {
    const slides = []

    this.state.games.map((game, index) => {
      if (game.__typename === 'turkey_of_the_dead') {
        return;
      }

      slides.push(Rules({
                          currentGame: this.props.step.currentGameName,
                          currentGameType: this.props.step.currentGame,
                          fname: () => this.props.updateCurrentGameName({game}),
                          rules: game.rules,
                          scores: this.props.scores
                        })
                  )
      game.questions.map((question, index) => {
        if (question.multiple) {
          slides.push(Multiples({
                                  question: question.name,
                                  choices: question.choices,
                                  fstep: () => this.props.updateGameStep({index}),
                                  currentGame: this.props.step.currentGameName,
                                  currentGameType: this.props.step.currentGame,
                                  scores: this.props.scores
                                })
                      )
        } else {
          slides.push(Single({
                              question: question.name,
                              fstep: () => this.props.updateGameStep({index}),
                              currentGame: this.props.step.currentGameName,
                              currentGameType: this.props.step.currentGame,
                              scores: this.props.scores
                            })
                      )
        }
        return slides.push(Answer({
          answer: question.answer,
          currentGame: this.props.step.currentGameName,
          currentGameType: this.props.step.currentGame,
          scores: this.props.scores
        })
  )
      })
      console.log('screen: ', `screen${this.props.step.currentGame}`)
      return slides.push(Score({
                            currentGameType: `screen${this.props.step.currentGame}`,
                            scores: this.props.scores
                        })
                  )
    })
    return (slides)
  }

  render() {
    const { games, teams } = this.state.xmas

    return (
      <Deck
        transition={['fade', 'slide']}
        transitionDuration={500}
        theme={theme}
        ref={this.deck}
      >
        {Intro()}
        {Team({ teams: teams})}
        {Menu({ games: games })}
        {this.renderGame()}
        {this.renderEndGame()}
        {End()}

      </Deck>
    );
  }
}

const mapStateToProps = state => ({
  scores: state.xmas.scores,
  step: state.xmas.step,
})

const mapDispatchToProps = dispatch => ({
  updateGameStep: (index) => dispatch(gameActions.updateGameStep(index)),
  updateCurrentGameName: (game) => dispatch(gameActions.updateGameName(game)),
  ScoreTeam: (id, score) => dispatch(gameActions.scoreTeam(id, score)),
  UnScoreTeam: (id) => dispatch(gameActions.unScoreTeam(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Presentation)
