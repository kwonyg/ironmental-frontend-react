import React, { useEffect } from 'react'
import { useLocation, RouteComponentProps } from 'react-router-dom'
import { apiUtils } from 'src/utils'
import { useDispatch } from 'react-redux'
import { sendJoin, sendLogin } from 'src/services/user/actions'

const Callback: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch()
  const code = apiUtils.querystringToObj(useLocation().search).code.toString()
  const prevUrl = apiUtils.querystringToObj(useLocation().search).prevUrl

  useEffect(() => {
    if (prevUrl === '/join') {
      dispatch(sendJoin(code))
    } else if (prevUrl === '/login') {
      dispatch(sendLogin(code))
    }
  }, [dispatch, code, prevUrl])

  return <div>인증완료!</div>
}

export default Callback
