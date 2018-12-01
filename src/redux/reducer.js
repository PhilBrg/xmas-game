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

const ScoreTeam1 = (state, { payload }) => ({
  ...state,
  score: {
    ...state.score,
    team_1: state.score.team_1 + payload.score,
  }
})

const ScoreTeam2 = (state, { payload }) => ({
  ...state,
  score: {
    ...state.score,
    team_2: state.score.team_2 + payload.score,
  }
})

const UnScoreTeam1 = (state) => ({
  ...state,
  score: {
    ...state.score,
    team_1: state.score.team_1 - 1,
  }
})

const UnScoreTeam2 = (state) => ({
  ...state,
  score: {
    ...state.score,
    team_2: state.score.team_2 - 1,
  }
})



const reducer = {
  [types.UPDATE_GAME_STEP]: updateGameStep,
  [types.UPDATE_CURRENT_GAME_NAME]: updateCurrentGameName,
  [types.SCORE_TEAM_1]: ScoreTeam1,
  [types.SCORE_TEAM_2]: ScoreTeam2,
  [types.UNSCORE_TEAM_1]: UnScoreTeam1,
  [types.UNSCORE_TEAM_2]: UnScoreTeam2
}

export default handleActions(reducer, initialState)
