import request from 'src/config/axios'

// TODO: 리뉴얼 전꺼는 post 요청으로 되어있는데 현재 버전은 patch 되어 있음
export const sendAuth = (subscriberId: string) =>
  request.patch('/auth/confirm', { subscriberId })
