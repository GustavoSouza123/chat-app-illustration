import React from "react";
import Stripe from "./components/Stripe";
import CellPhone from "./components/CellPhone";
import Text from "./components/Text";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
    return (
        <main className="app">
            <Stripe id="left" />
            <Stripe id="right" />
            <CellPhone />
            <Text />
            <Footer />
        </main>
    );
}

export default App;