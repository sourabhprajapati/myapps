import React from "react";
import "./index.css";
import logo from "./images1/image-product-desktop.jpg"
const Index = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-left">
         
            <img src={logo} />
          
        </div>
        <div className="card-right">
          <p >PERFUME</p>
          <h1>Gabrille<br/>
          Essence Eau<br/>
          De parfum</h1>
          <h6>A floral,solar and voluption interpretation composed by 
          olivier Polge,Perfume-Creator for the House of CHANEL.</h6>
          <h2>$149.99</h2>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
