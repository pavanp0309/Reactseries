// let heading=document.createElement("h1")
// heading.innerHTML="hello react Dev😎"

// let root=document.getElementById("root")
// root.appendChild(heading)

import React from "react"
let heading=React.createElement("h1",{id:"id1"},"i am react dev😎")

let wrapper=React.createElement("div",{}, // div1
React.createElement("div",{}, //div2
[React.createElement("h1",{},"i am senior react dev"),React.createElement("p",{},"i am also dev")]
))

let root=ReactDOM.createRoot(document.getElementById("root"))
root.render(wrapper)