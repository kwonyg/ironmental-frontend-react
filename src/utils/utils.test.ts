import { objToQuerystring } from './api'

describe('api uitl test', () => {
  test('objToQuerystring ', () => {
    expect(objToQuerystring({ offset: 4, limit: 7 })).toBe('offset=4&limit=7')
  })
})
