const intialState = [
  { id: 1, text: 'Star Tina.js', completed: false },
  { id: 2, text: 'Star Tina-Redux', completed: true },
  { id: 3, text: 'Build a mini-program with Tina.js', completed: false },
  { id: 4, text: 'Add to Showcase of Tina.js', completed: false },
]

const todos = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'CLEAR_COMPLETED_TODOS':
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}

export default todos
