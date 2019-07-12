import React, { Component } from "react";
import "./style.css";

export class index extends Component {
  render() {
    return (
      <div className="wrapper-wellcome">
        <h1>
          <span className="highlight-janjian">Janjian</span>
        </h1>
        <h2 className="detail-janjian">
          sebuah platform untuk berkumpul dan membuat janji bersama.
        </h2>
      </div>
    );
  }
}

export default index;
