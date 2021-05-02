import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createRange, moveRange } from '../src'
import { wrapInRange } from '../src/lib/wrapInRange'
import { getCyclicRangeValues } from '../src/lib/getCyclicRangeValues'

const myRange = createRange<number>(5, 10)
const mySecondRange = createRange<number>(2, 4)

const App = () => {
  return <div>{JSON.stringify(getCyclicRangeValues(10, mySecondRange))}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
