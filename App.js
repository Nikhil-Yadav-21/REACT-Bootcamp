const heading = React.createElement("h1", {}, "Hello World!");
    const root = ReactDOM.createRoot(document.getElementById("root"));

    // This is where the React code will get inject inside root
    root.render(heading);