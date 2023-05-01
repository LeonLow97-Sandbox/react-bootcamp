# Navigation

## Traditional Browser Navigation

- When the browser loads a new HTML document, all existing JS variables and code is dumped.
    - Doesn't really matter for a traditional HTML-focused app.
        - For 1 request, load only `something.html`
    - Bad for a React app.
        - For 1 request, have to load `index.html`, `bundle.js` and `something.html`

## How navigation works with React?

- CRA always sends back `index.html`.

## Changing the Address Bar: `PushState` Function

- Update address bar to trick the user into thinking they swapped pages.
- Causes a full page refresh (not what we want)
    - `window.location = 'http://localhost:3000/dropdown'`
- Updates the address bar but doesn't cause a full page refresh
    - `window.history.pushState({}, '', '/dropdown')`

## Creating Link to prevent browser refresh

- Create `Link` component to prevent the browser from performing a full page refresh.

```js
// Custom Link component
function Link({to}) {
    const handleClick = (event) => {
        event.preventDefault();

        console.log('User navigating to: ', to);
    };

    return <a onClick={handleClick} href={to}>Click</a>
}
```

## Creating back button or forward button

- Prevent full browser refresh when user clicks the 'back' or 'forward' button on the browser.
- When the user clicks on the forward or back button, Window emits a `popstate` event if the user current url was added by `pushState`.
- If the address was added with `pushState`, there won't be a full page refresh.
    - So, navigate the user around by using `pushState`.
- To detect the user going back and forward, watch for the `popstate` event:
    - E.g., `window.addEventListener('popstate', () => console.log('I am at', window.location.pathname))`

## `Route` component

- If currentPath == path prop, show children.
- 2 props:
    - path: '/dropdown'
    - children: DropdownPage

## Popular Navigation Libraries

- React-Router
    - [Link](https://reactrouter.com/en/main/start/tutorial)
- Wouter
    - [Link](https://github.com/molefrog/wouter)
- React-Location
- Reach-Router