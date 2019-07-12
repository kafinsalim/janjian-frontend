import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="panel-footer">
        <Link to="/create" style={{ color: "#FF880A" }}>
          Create New Janji
        </Link>
        <Link to="/about">Tentang Janjian</Link>
        <Link to="/logout">Log Out</Link>
        <br />
        <br />
        © 2019 Janjian | Janjian is a react project for learning purpose by
        kafin salim.
        <br />
        <br />
      </div>
    );
  }
}
