
const todoStorage = {
  fetch: (key, defaul) => {
    return JSON.parse(localStorage.getItem(key)) || defaul
  },
  save: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
  }
}
export default todoStorage
