let initialState = {
  users: []
}

export default function Users_reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "create":
      state = {
        ...state,
        users: [...state.users, payload]
      }
      return state;
    case 'remove': return { ...state, users: state.users.filter(t => t.id !== payload) }
    case 'edit': return { ...state, users: state.users.map(t => t.id === payload.id ? payload : t) }
    default: return state
  }
}