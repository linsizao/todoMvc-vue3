const filters = {
  all: (todos) => {
    return todos
  },
  active: (todos) => {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: (todos) => {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

export default filters