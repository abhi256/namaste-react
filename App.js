/**
 *  <div id="parent">
        <div id="child">
            <h1> i am h1 tag</h1>
        </div>

    </div>
 * 
 * */ 

    const heading = React.createElement(
    "div",
    {id:"parent"},[
    React.createElement(
        "div",
        {id:"child"},
        [ React.createElement("h1",{},"I am the h1 tag"),
        React.createElement("h2",{},"I am the h2 tag") 
    ]),
    React.createElement(
        "div",
        {id:"child2"},
        [ React.createElement("h1",{},"I am the h1 tag"),
        React.createElement("h2",{},"I am the h2 tag") 
    ])
]);




//const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World From React!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);



