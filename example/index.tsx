import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {getRangeValues} from "../src/lib/getRangeValues";
import {createRange, getDifference} from "../src";

const myRange = createRange(5,10)
const secondRange = createRange(8,20)

const App = () => {
    return (
        <div>
            {JSON.stringify(getRangeValues(myRange))}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
