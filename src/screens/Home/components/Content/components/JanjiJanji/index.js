import React, { Component } from "react";
import "./style.css";

function Janji(props) {
  return (
    <div className="item-janji" key={props.index}>
      <h3>{props.janji.judul}</h3>
      <p>{props.janji.konten}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <b>{props.janji.waktu}</b>
        <i>{props.janji.lokasi}</i>
      </div>
    </div>
  );
}

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listJanji: [
        {
          judul: "Workshop Framework React",
          konten: "build react from scratch",
          waktu: "Senin, 19 Juni 2019",
          lokasi: "Jakarta, Campus Hacktiv8"
        },
        {
          judul: "Workshop Framework Vue",
          konten: "build Vue from scratch",
          waktu: "Rabu, 23 Juni 2019",
          lokasi: "Jakarta, Telkom Landmark Tower"
        },
        {
          judul: "Workshop Framework Ember",
          konten: "build Ember from scratch",
          waktu: "Minggu, 27 Juni 2019",
          lokasi: "Bandung, Campus Hacktiv8"
        },
        {
          judul: "Workshop Framework Angular",
          konten: "build Angular from scratch",
          waktu: "Selasa, 29 Juni 2019",
          lokasi: "Singapore, Campus Hacktiv8"
        }
      ]
    };
  }

  render() {
    return (
      <div className="wrapper-janji">
        {this.state.listJanji.map((data, index) => {
          return <Janji index={index} janji={data} />;
        })}
      </div>
    );
  }
}

export default index;
