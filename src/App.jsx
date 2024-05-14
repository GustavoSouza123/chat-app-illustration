import React from "react";
import CellPhone from "./components/CellPhone";
import Text from "./components/Text";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
    return (
        <div className="app">
            <h1>Hello world!</h1>
            <CellPhone />
            <Text />
            <Footer />
        </div>
    );
}

export default App;