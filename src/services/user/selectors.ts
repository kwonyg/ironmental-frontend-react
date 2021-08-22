import { TypedState } from 'src/types'

export const getLoggedInUser = (state: TypedState.RootState) => state.user.user
