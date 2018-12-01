import { createAction } from 'redux-actions'
import * as types from './types'

export const gameActions = {
  updateGameStep: createAction(types.UPDATE_GAME_STEP),
  updateGameName: createAction(types.UPDATE_CURRENT_GAME_NAME),
  scoreTeam: createAction(types.SCORE_TEAM),
  unScoreTeam: createAction(types.UNSCORE_TEAM)
}
