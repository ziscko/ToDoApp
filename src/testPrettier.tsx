import React, { useState } from 'react'

import PropTypes from 'prop-types'

const MyComponent = ({ title, items }) => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={incrementCount}> Increment Count </button> <p> Current count: {count} </p>
    </div>
  )
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const App = () => {
  return <MyComponent title="My List" items={['Item 1', 'Item 2', 'Item 3']} />
}

export default App
