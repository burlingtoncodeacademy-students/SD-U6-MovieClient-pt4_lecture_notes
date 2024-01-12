### Before Getting Started
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

### Topics Covered
- 

### What Should Already Be Understood
- Creating a React Application
  - File / Folder structure
- Reusable Components
- Props 
- useState, useRef, useEffect
- localstorage
- React-Router-DOM

## Files / Folders Provided in this Lesson
This project is meant to build upon **Part 1** lecture. Building out a new project will require the previous code in order to function correctly. Creating a new application will also require the install of `reactstrap` and `bootstrap`. 
- `npm install reactstrap react react-dom`
- `npm install --save bootstrap`
- `npm i react-router-dom`
  - review [index.js](./src/index.js) and 
    - `import 'bootstrap/dist/css/bootstrap.min.css';`
    - `import {BrowserRouter} from 'react-router-dom;` and update `const root`
```js 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  // <-- ADDED
      <App />
    </BrowserRouter>  // <-- ADDED
  </React.StrictMode>
);
``` 

- movies
  - src
    - components
      - auth
        - Auth.jsx
        - signup
          - Signup.jsx
        - login
          - Login.jsx
    - `App.jsx`
    - [App.css](./src/App.css) (provided code)

## Resources
- [Reactstrap Docs](https://reactstrap.github.io/?path=/docs/components-forms--input#hidden-labels)
- [Bootstrap Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [w3Schools useRef](https://www.w3schools.com/react/react_useref.asp)
- [Hook API Reference React](https://reactjs.org/docs/hooks-reference.html#useref)
- [NPM Cors Package](https://www.npmjs.com/package/cors)
- [setItem()](https://www.w3schools.com/jsref/met_storage_setitem.asp)
- [React Router Docs](https://reactrouter.com/en/main)
- [Browser-Router](https://reactrouter.com/en/main/router-components/browser-router)
- [Route](https://reactrouter.com/en/main/route/route)
- [Navigate](https://reactrouter.com/en/main/components/navigate)
- [w3Schools useEffect](https://www.w3schools.com/react/react_useeffect.asp)
- [useEffect Hook](https://reactjs.org/docs/hooks-effect.html)
- [Explanation of useEffect](https://dmitripavlutin.com/react-useeffect-explanation/)

# Challenge
