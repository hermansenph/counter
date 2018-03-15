const initialState = {counterValue: 0}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        counterValue: state.counterValue + 1
      })
    case 'DECREMENT':
      return Object.assign({}, state, {
        counterValue: state.counterValue - 1
      })
    default: return state
  }
}
