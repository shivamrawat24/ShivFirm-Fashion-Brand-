import React from "react";
import "../Services/Service.css";

function Service() {
  return (
    <div className="welcome-top">
      <h4>Top Brands and Reviews by Top Notchers</h4>
      <div className="welcome-reviews">
        <span>
          <img src="#" alt="product-1" className="product-img" />{" "}
          <p>
            <img src="celeb images" alt="Shahrukh khan" />
            <b> : " Amazing brands and amazing colletions, you shoul try "</b>
          </p>
        </span>
        <span>
          <img src="#" alt="product-2" className="product-img" />{" "}
          <p>
            <img src="" alt="Ranvir kapoor" />
            <b> : " Amazing brands and amazing colletions, you shoul try "</b>
          </p>
        </span>
        <span>
          <img src="#" alt="product-3" className="product-img" />{" "}
          <p>
            <img src="" alt="Ms Dhoni" />
            <b> : " Amazing brands and amazing colletions, you shoul try "</b>
          </p>
        </span>
        <span>
          <img src="#" alt="product-4" className="product-img" />{" "}
          <p>
            <img src="" alt="Sunil chetri" />
            <b> : " Amazing brands and amazing colletions, you shoul try "</b>
          </p>
        </span>
        <span>
          <img src="#" alt="product-5" className="product-img" />{" "}
          <p>
            <img src="" alt="Amitabh Bachchan" />
            <b> : " Amazing brands and amazing colletions, you shoul try "</b>
          </p>
        </span>
      </div>
      <div className="top-brands">
        <h4>Top Brands = Top products</h4>
        <div className="brands-collections">
          <span><img src="" alt="Addidas" /></span>
          <span><img src="" alt="H&M" /></span>
          <span><img src="" alt="Rajmahal" /></span>
          <span><img src="" alt="Gucci" /></span>
          <span><img src="" alt="ONE8" /></span>
          <span><img src="" alt="puma" /></span>
          <span><img src="" alt="ZXXI" /></span>
        </div>
      </div>
      {/* <h1>This is service page</h1> */}
    </div>
  );
}

export default Service;
