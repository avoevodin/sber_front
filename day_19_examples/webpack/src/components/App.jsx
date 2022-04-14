const { useState } = require("react")

const App = () => {
    const [state, setState] = useState(0)

    return (
        <main>
            <p>{state}</p>
            <button onClick={() => setState(prev => prev += 1)}>+</button>
            <button onClick={() => setState(prev => prev -= 1)}>-</button>
        </main>
    )
}

export default App
