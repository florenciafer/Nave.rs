export const useLocalStorage = () => {
  const token = localStorage.getItem('token') || null

  function setToken(token) {
    localStorage.setItem('token', token)
  }

  function logout() {
    localStorage.removeItem('token')
  }

  return {
    token,
    setToken,
    logout
  }
}