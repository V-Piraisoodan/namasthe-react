// here in normal js we use document.createElement
// in react we use React.createElement
// intha creareElements is takes 3 arguments
// first is what tag we want
// second is when we want the attribute we put it here(in obj format) or we dont need put null
// third is value 

// -----------------------------------------------

// creating a element is a core thing of react, so we write React.createElement
const heading = React.createElement(
    "h1",
    null, // {id: "heading"} or {class: "heading"} or {style: {color: "red"}} or {...other attributes}
    "Hello World Code"
)

// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello World Code"
// )

console.log(heading); // console la namaku object kedaikkum, html structure kidaikathu , react element is object


// ipppo indha heading ah naama root la render seinum ,, line: 11 la
// react root la than ellathaium render seium
// render pandrathu ellam reactdom vela, so ReactDom nu podrom

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

// step1
// the heading is not a html tag/element
// this is just creating an object

// step2
// reactdom.createRoot - it is a method of reactdom which is used to create a root element

// step3
// render - it is a method of reactdom, ithu object ah html ah mathi browser la render pannum
// <h1>Hello World Code</h1> indha mathiri elements ah mathidum

