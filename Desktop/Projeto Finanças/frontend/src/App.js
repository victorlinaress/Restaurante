import React from "react";
import Global from "./styles/global";
import Resume from "./components/resume";
import Header from "./components/header";


const App = () => {
    return (
        <>
        <Header></Header>
        <Resume></Resume>
            <Global />
            <h1>Hello, World!</h1>
        </>
    );
}
export default App;