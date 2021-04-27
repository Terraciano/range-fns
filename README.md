
## Motivation

Functional library for working with numerical ranges in TS

## Get started

Install

```bash
npm install --save range-fns
# or
yarn add range-fns
```

Use

```typescript
import { noop } from 'range-fns'

console.log(noop()) // undefined
```

[Examples](https://github.com/skulptur/range-fns/tree/master/example)

## API

- Functions that can be pure, are pure.
- The argument order is optimized for partial application.

Exports:

### noop

`() => void`

```typescript
const nothing = noop() // undefined
```
