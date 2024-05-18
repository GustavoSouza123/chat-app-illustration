import React from "react";
import CellPhone from "./components/CellPhone";
import Text from "./components/Text";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
    return (
        <main className="app">
            <CellPhone />
            <Text />
            <Footer />
        </main>
    );
}

export default App;