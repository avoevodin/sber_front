const { useState } = require("react")
const logo = require('../img/webpackLogo.png')

const App = () => {
    const [state, setState] = useState(0)

    return (
        <main>
            <img src={logo} alt="" />
            <p>{state}</p>
            <button onClick={() => setState(prev => prev += 1)}>+</button>
            <button onClick={() => setState(prev => prev -= 1)}>-</button>
        </main>
    )
}

export default App
