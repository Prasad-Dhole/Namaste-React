const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "h2",
            {id:"h2"},
            "Dear Parents,"
        ), 
        React.createElement(
            "div",
            {id:"child"},
            React.createElement(
                "h3",
                {id:"h3"},
                "I hope i will make you feel proud someday."
            )
        ), 
        React.createElement(
            "h4",
            {id:"h4"},
            "Your child"
        )
    ]
);
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);