import { TypedProps } from 'src/types'
export const setUser = (user: TypedProps.User) => {
  try {
    localStorage.setItem('user', JSON.stringify(user))
  } catch (e) {
    alert('localStorage error')
  }
}

export const getUser = () => {
  try {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    }
  } catch (e) {
    alert('localStorage error')
  }
}

export const removeUser = () => {
  try {
    localStorage.removeItem('user')
  } catch (e) {
    alert('localStorage error')
  }
}
