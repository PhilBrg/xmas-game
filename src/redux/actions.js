import { createAction } from 'redux-actions'
import * as types from './types'

export const gameActions = {
  updateGameStep: createAction(types.UPDATE_GAME_STEP),
  updateGameName: createAction(types.UPDATE_CURRENT_GAME_NAME),
  scoreTeam1: createAction(types.UPDATE_SCORE_TEAM_1),
  scoreTeam2: createAction(types.UPDATE_SCORE_TEAM_2)
}
