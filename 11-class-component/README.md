# Class-based components

- Mostly functional components.
- An alternative of building components.

## Functional Components vs Class Components

- Functional Components
- Components are regular JavaScript functions which return renderable results (typically JSX).
- Default and Most Modern Approach
```js
function Product(props) {
    return <h2>A Product!</h2>
}
```

- Class-based Components
- Components can also be defined as JS classes where a `render()` method defined the to-be-rendered output.
- Cannot use react hooks
```js
class Product extends Component {
    render() {
        return <h2>A Product!</h2>
    }
}
```

## Props in Class-based component

- Using the keyword `this`
```js
import { Component } from "react";

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
```

## Class-based component with `this` keyword

- Define functions as methods and states in constructor().
```js
class Users extends Component {
  // define 'state' in constructor (always an object)
  constructor() {
    super();
    this.state = {
      showUsers: true,
      moreState: "Test",
      nested: {},
      data: [],
    };
  }

  // define function as methods
  // merges the update of state
  toggleUsersHandler() {
    // this.state.showUsers = false // NOT!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
```

## `this` keyword

- [`this` keyword](https://academind.com/tutorials/this-keyword-function-references)

## Class-based Component Lifecycle

- Side-effects in Functional Components: `useEffect()`
- Class-based Components can't use React Hooks!

---

- `componentDidMount()`
    - called once component mounted (was evaluated & rendered)
    - like `useEffect()` with no dependencies
- `componentDidUpdate()`
    - called once component updated (was evaluated & rendered)
    - like `useEffect(..., [somevalue])` with some dependencies
- `componentWillUnmount()`
    - called right before component is unmounted (removed from the DOM)
    - `useEffect(() => {return () => {...}}, [])` with cleanup function. 













