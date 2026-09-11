import { useState } from "react"

function Day3() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>State with useState</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  )
}

export default Day3