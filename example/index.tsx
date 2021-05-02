import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createRange, moveRange } from '../src'
import { getExclusion } from '../src/lib/getExclusion'

const myRange = createRange<number>(5, 10)
const mySecondRange = createRange<number>(7, 20)

const App = () => {
  return <div>{JSON.stringify(getExclusion(myRange, mySecondRange))}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
