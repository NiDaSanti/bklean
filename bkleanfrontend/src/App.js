import React, {useState} from "react";
import Card from "./components/Card/card.js";
import MainNav from "./components/MainNav/mainNav.js";
import Footer from "./components/Footer/footer.js";
import AddToCartButton from "./components/AddToCartButton/addToCartButton.js";
import StripeCheckout from "react-stripe-checkout";

function App() {
  return (
    <div className="App">
     <MainNav/>
     <Card />
     <Footer/>
    </div>
  );
}

export default App;
