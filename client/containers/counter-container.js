import { connect } from 'react-redux'
import { increment, decrement } from '../actions/index.js'
import CounterApp from '../components/counter-app.js'

const mapStateToProps = (state) => {
  return {
    value: state.counter.counterValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    onIncrementClick: () => {
      dispatch(increment())
    },

    onDecrementClick: () => {
      dispatch(decrement())
    }
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp)

export default CounterContainer
