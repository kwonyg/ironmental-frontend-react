import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import { useLocation, RouteComponentProps } from 'react-router-dom'
import { apiUtils } from 'src/utils'
import { useDispatch } from 'react-redux'
import { actions } from 'src/services/user/actions'
import { routePath } from 'src/constants'
import LoadingAnimation from 'src/assets/animations/loading.json'

const Callback: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch()
  const code = apiUtils.querystringToObj(useLocation().search).code as string
  const prevUrl = apiUtils.querystringToObj(useLocation().search).prevUrl

  useEffect(() => {
    if (prevUrl === routePath.JOIN) {
      dispatch(actions.sendJoin(code))
    } else if (prevUrl === routePath.LOGIN) {
      dispatch(actions.sendLogin(code))
    }
  }, [dispatch, code, prevUrl, history])

  return (
    <div>
      인증주웅..!
      <Lottie
        options={{
          animationData: LoadingAnimation,
          loop: true,
        }}
      />
    </div>
  )
}

export default Callback
