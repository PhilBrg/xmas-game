import { handleActions } from 'redux-actions'
import * as types from './types'

const initialState = {
    step: {
      currentGame: null,
      currentGameName: null,
      currentQuestion: 0,
    },
    scores: [
      {
        id: '1',
        count: 0
      },
      {
        id: '2',
        count: 0
      }
    ]

}

const updateGameStep = (state, { payload }) => ({
  ...state,
  step: {
    ...state.step,
    currentQuestion: payload.index + 1,
  }
})

const updateCurrentGameName = (state, { payload }) => ({
  ...state,
  step: {
    ...state.step,
    currentGame: payload.game.__typename,
    currentGameName: payload.game.name,
  }
})

const scoreTeam = (state, { payload }) => ({
    ...state,
    scores: state.scores.map(score => {
      if (score.id === payload.id) {
        return {
          ...state.score,
          id: payload.id,
          count: score.count + payload.score
        }
      }
      return score
    })
})

const unScoreTeam = (state, { payload }) => ({
  ...state,
  scores: state.scores.map(score => {
    if (score.id === payload.id) {
      return {
        ...state.score,
        id: payload.id,
        count: score.count - 1
      }
    }
    return score
  })
})



const reducer = {
  [types.UPDATE_GAME_STEP]: updateGameStep,
  [types.UPDATE_CURRENT_GAME_NAME]: updateCurrentGameName,
  [types.SCORE_TEAM]: scoreTeam,
  [types.UNSCORE_TEAM]: unScoreTeam,
}

export default handleActions(reducer, initialState)
