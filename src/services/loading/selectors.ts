import { StateTypes } from 'src/types'

export const selectLoading = (
  state: StateTypes.RootState
): StateTypes.LoadingState => state.loading
