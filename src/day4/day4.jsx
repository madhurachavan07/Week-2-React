function Day4() {
  function handleClick() {
    alert("Button clicked!")
  }

  return (
    <div>
      <h1>Event Handling</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Day4