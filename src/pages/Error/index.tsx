import * as React from 'react'
import { Result, Button } from 'antd'
import { PropsTypes } from 'src/types'
import { errorMessage, routePath } from 'src/constants'
import { routeUtils } from 'src/utils'
import { useLocation } from 'react-router-dom'

interface LocationState {
  errorResponseData: PropsTypes.ErrorResponseData
}

const errorResults: { [key in string | number]: PropsTypes.ErrorInfo } = {
  unknown: {
    status: undefined,
    title: '예기치 못한 오류',
    message: errorMessage.unknown,
  },
  404: { status: '404', title: '404', message: errorMessage.notFound },
  500: { status: '500', title: '500', message: errorMessage.server },
}

const Error: React.FC = () => {
  const locationState = useLocation().state as LocationState
  const errorStatus = locationState
    ? locationState.errorResponseData.status
    : '404'
  const errorResult = errorResults[errorStatus]
    ? errorResults[errorStatus]
    : errorResults.unknown

  const handleClick = () => {
    routeUtils.push(routePath.HOME)
  }

  return (
    <Result
      status={errorResult.status}
      title={errorResult.title}
      subTitle={errorResult.message}
      extra={
        <Button type="primary" onClick={handleClick}>
          Back Home
        </Button>
      }
    />
  )
}

export default Error
