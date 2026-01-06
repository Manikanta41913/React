
const heading = React.createElement("div",
    { id: "parent" },
    [React.createElement("div",
        { id: "child1" },
        [React.createElement("h1", [], "Hi this tag1 from child1"),
        React.createElement("h2", [], "Hi this tag2 from child1")]),
    React.createElement("div", 
        { id: "child2" },
        [React.createElement("h1", [], "Hi this tag1 from child2"),
        React.createElement("h2", [], "Hi this tag2 from child2")])
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
