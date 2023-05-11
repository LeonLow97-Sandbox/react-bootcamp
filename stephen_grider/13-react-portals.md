# React Portals with ReactDOM

- Use for Modals.

# HTML For Modal

- Put the Modal's HTML div positioned relative to the HTML document.
- This div will never have a 'positioned' parent.
- We want to position the modal component to the html body.
- Reference to an element in our `index.html` file.

```js
import ReactDOM from 'react-dom';

function Modal() {
    return ReactDOM.createPortal(
        <div>Modal</div>

        document.querySelector('.modal-container')
    );
}
```
