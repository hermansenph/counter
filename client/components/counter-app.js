import React from 'React'

export default function CounterApp({ value, onIncrementClick, onDecrementClick }) {
  return (
    <div>

      <h1 id="counter-value">
        {value}
      </h1>

      <div id="counter-buttons">

        <button id="counter-buttons-decrement"
          onClick={onDecrementClick}
        >
          {'-'}
        </button>

        <button id="counter-buttons-increment"
          onClick={onIncrementClick}
        >
          {'+'}
        </button>

      </div>

    </div>
  )
}
