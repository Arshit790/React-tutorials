```javascript
import React from "react";
import ReactDOM from "react-dom";
// Nested Elements
// For passing siblings => we have to pass the array of childrens in 3rd parameter
// *const parent = React.createElement("div", { id: "parent" }, [
//  * React.createElement("div", { id: "child" }, [
//   *  React.createElement("h1", {}, "Hi I'm h1 Tag!"),
//    * React.createElement("h2", {}, "Hi I'm h2 Tag!"),
//   *]),
//   *React.createElement("div", { id: "child2" }, [
//    * React.createElement("h1", {}, "Hi I'm h1 Tag!"),
//    * React.createElement("h2", {}, "Hi I'm h2 Tag!"),
//   *]),
// *]);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// !root.render(parent);

// ?React Element

//? const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "React Renders work here 👌"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX -> JSX is HTML like syntax

// ! JSX (transpiled before it reaches to JS engine) = Parcel = Babel
// ? JSX => Babel transpiles it to React.createElement =>   React ELement (JS OBject) => HTML Element(Render)

const jsxHeading = <h1 id="heading">JSX Heading 😘</h1>;

// root.render(jsxHeading);

// console.log(heading, jsxHeading); // both are same without JSX or with JSX.

// React Component

const HeadingComponent2 = () => (
  <div id="container">
    {/* Injecting React Element using {} braces */}
    {/* {title} */}
    {1000 + 20000}
    {console.log("Executing inside........")}
    <h1>Helo React! </h1>
  </div>
);

const title = (
  <h1>
    React with JSX🎈
    <HeadingComponent2 />
  </h1>
);
root.render(title);
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./index.css" />
    <title>React</title>
  </head>
  <body>
    <div id="root">
      <!-- this content is replaced by parent in root.render(parent) -->
      <h1>Not Rendered 😵‍💫</h1>
    </div>
    <script type="module" src="./App.js"></script>
  </body>
</html>
```

/\*

- Header
- Logo
- Navbar
- Body
- Search
- Restaurant Container
- -img
- -name of res,stars,cuisine,delivery time
- Footer
- -copyrights
-     -links
- -address
- -contact

\*/

Two types of Export/Import

Default Export/Import
export default Component; import Component from "path";

Named Export/Import
export const Component; import {Component} from "path";
