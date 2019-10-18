import React from "react";

// This file exports form elements

export function Input(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input className="form-control" {...props} />
    </div>
  );
}

export function Radio(props) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="radio" {...props} />
      <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function RedBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-danger">
      {props.children}
    </button>
  );
}


export function OjBtn(props) {
  return (
    <button {...props} style={{ display: "block", clear: "both", margin: "30px auto 0" }} className="btn btn-danger">
      {props.children}
    </button>
  );
}

export function BlueBtn(props) {
  return (
    <button {...props} style={{ display: "block", clear: "both", margin: "30px auto 0" }} className="btn btn-info">
      {props.children}
    </button>
  );
}
