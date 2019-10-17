import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, EditBtn } from "../components/Form";

class Report extends React.Component {

  tate = {
    addType: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    make: "",
    model: "",
    year: "",
    color: "",
    plateNumber: "",
    odometer: "",
    vin: "",
    date: "",
    parts: "",
    labor: "",
    total: "",
    tax: "",
    grandTotal: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
       ""
    )
  };
}

export default Report;