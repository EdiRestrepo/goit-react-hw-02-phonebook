import React, { Component } from "react";
import css from "./Filter.module.css";

export class Filter extends Component {
  render() {
    return (
      <div>
        <label>Find contacts by name</label>
        <br/>
        <input type="text" />
      </div>
    );
  }
}

export default Filter;
