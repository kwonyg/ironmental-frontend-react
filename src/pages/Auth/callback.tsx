import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { apiUtils } from 'src/utils'
import { useDispatch } from 'react-redux'
import { sendJoin, sendLogin } from 'src/services/user/actions'
import { routePath } from 'src/constants'

const Callback: React.FC = () => {
  const dispatch = useDispatch()
  const code = apiUtils.querystringToObj(useLocation().search).code as string
  const prevUrl = apiUtils.querystringToObj(useLocation().search).prevUrl

  useEffect(() => {
    if (prevUrl === routePath.JOIN) {
      dispatch(sendJoin(code))
    } else if (prevUrl === routePath.LOGIN) {
      dispatch(sendLogin(code))
    }
  }, [dispatch, code, prevUrl])

  return <div>인증완료!</div>
}

export default Callback
