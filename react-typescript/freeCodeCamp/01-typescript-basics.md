## TypeScript Basics

- `void` vs `never`
  - `void`: returns undefined
  - `never`: does not return anything.
- `unknown`
  - use when unsure of the type.
  - use this instead of `any`

## Alias (`type` and `interface`)

```ts
type Person = {
  name: string;
  age?: number; // optional
};

interface Person {
  name: string;
  age?: number; // optional
}
```

## Extending Types

```ts
type X = {
  a: string;
  b: number;
};

type Y = X & {
  c: string;
  d: number;
};

let y: Y = {
  c: 'oisjf',
  d: 23,
  a: 'w',
  b: 23,
};
```

## Extending Interfaces

```ts
interface Person {
  name: string;
  age?: number; // optional
}

interface Guy extends Person {
  profession: string;
}
```
