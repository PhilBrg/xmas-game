import { handleActions } from 'redux-actions'
import * as types from './types'

const initialState = {
    step: {
      currentGame: null,
      currentGameName: null,
      currentQuestion: 0,
    },
    score: {
      team_1: 0,
      team_2: 0,
    }

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

const updateScoreTeam1 = (state, { payload }) => ({
  ...state,
  score: {
    ...state.score,
    team_1: state.score.team_1 + payload.score,
  }
})

const updateScoreTeam2 = (state, { payload }) => ({
  ...state,
  score: {
    ...state.score,
    team_2: state.score.team_2 + payload.score,
  }
})



const reducer = {
  [types.UPDATE_GAME_STEP]: updateGameStep,
  [types.UPDATE_CURRENT_GAME_NAME]: updateCurrentGameName,
  [types.UPDATE_SCORE_TEAM_1]: updateScoreTeam1,
  [types.UPDATE_SCORE_TEAM_2]: updateScoreTeam2
}

export default handleActions(reducer, initialState)
