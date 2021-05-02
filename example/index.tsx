import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createRange, moveRange} from "../src";

const myRange = createRange<number>(5,10)

const App = () => {
    return (
        <div>
            {JSON.stringify(moveRange(myRange,10))}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
