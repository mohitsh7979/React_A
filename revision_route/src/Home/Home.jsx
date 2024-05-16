import React from "react";
import product from "./Home_Product";

function Home() {
  console.log(product);
  return (
    <>
      <div className="row">
        {product.map((item) => (
          <div className="col-md-3">
            <div className="card" style={{ width: "20rem", height: "200px" }}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
