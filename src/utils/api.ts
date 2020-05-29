interface QueryObject {
  [key: string]: number | string
}

export const objToQuerystring = (query: QueryObject) =>
  Object.keys(query)
    .map((key: string) => `${key}=${query[key]}`)
    .join('&')
