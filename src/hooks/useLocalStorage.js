export const useLocalStorage = () => {
  const token = localStorage.getItem('token') || null

  const setToken = (token) => {
    localStorage.setItem('token', token)
  }

  const logout =() => {
    localStorage.removeItem('token')
  }

  return {
    token,
    setToken,
    logout
  }
}