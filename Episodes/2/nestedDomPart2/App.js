// ---------------------- now ippo nested dom make pannanum

/*
* <div id="parent">
*   <div id="child">
*      <h1>Hello World Code</h1>
*    </div>
* </div>
*/

// ippo indha nested dom create pandrathu eppadi nu pathuduvom

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "Hello World Code")
    )
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)

// ippo enaku sibling elements venumna enna seirathu ?
/*
* <div id="parent">
*   <div id="child">
*      <h1>Hello World Code</h1>
*      <h2>Namaste React</h2>
*    </div>
* </div>
*/

// Ans: Array kulla podanum

const parent2 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "Hello World Code"),
            React.createElement("h2", {}, "Namaste React")
        ]
    )
)

console.log(parent2);

root.render(parent2)