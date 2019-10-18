import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, OjBtn, BlueBtn } from "../components/Form";

class Transaction extends React.Component {

  state = {
    editTransaction: false,
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
    vin: "",
    date: "",
    partsPrice: "",
    laborPrice: "",
    totalPrice: "",
    tax: "",
    grandTotal: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  toggleTransactionEdit = (event) => {
    event.preventDefault();
    this.setState({
      editTransaction: !this.state.editTransaction
    });
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", margin: "10px auto 30px" }}>Transaction Information</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-1" />
          <Col size="md-10" style={{ marginBottom: "50px" }}>
            <form>
              <div className="form-row">
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="date"
                    id="inputDate"
                    label="Date"
                    placeholder="Date"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editTransaction)}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="odometer"
                    id="odometer"
                    label="Odometer"
                    placeholder="Mileage"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editTransaction)}
                  />
                </Col>
                <Col size="sm-3">
                  <OjBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.toggleTransactionEdit}
                    children={this.state.editCustomer ? "Save Transaction" : "Edit Transaction"}
                  />
                </Col>
                <Col size="sm-3">
                  <BlueBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                  >Print Invoice</BlueBtn>
                </Col>
              </div>
              <div className="form-row">
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="partsPrice"
                    id="inputPartsPrice"
                    label="Parts"
                    placeholder="Parts"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editTransaction)}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="laborPrice"
                    id="inputLaborPrice"
                    label="Labor"
                    placeholder="Labor"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editTransaction)}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="totalPrice"
                    id="inputTotalPrice"
                    label="Total Pre-Tax"
                    placeholder="Total Pre-Tax"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editTransaction)}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="tax"
                    id="inputTax"
                    label="Tax"
                    placeholder="Tax"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editTransaction)}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col size="sm-9">
                  <TextArea
                    name="parts"
                    id="parts"
                    label="Service Description"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="grandTotal"
                    id="grandTotal"
                    label="Grand Total"
                    placeholder="Grand Total"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editTransaction)}
                  />
                </Col>
              </div>
            </form>

            <h3 style={{ marginTop: 30 }}>Customer:</h3>
            <form>
              <div className="form-row">
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="firstName"
                    id="inputFirstName"
                    label="First Name"
                    placeholder="First Name"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="middleName"
                    id="inputMiddleName"
                    label="Middle Name"
                    placeholder="Middle Name"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="lastName"
                    id="inputLastName"
                    label="Last Name"
                    placeholder="Last Name"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col size="sm-6">
                  <Input
                    type="input"
                    name="address"
                    id="inputAddress"
                    label="Street Address"
                    placeholder="Street Address"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="unit"
                    id="inputUnit"
                    label="Apt./Unit"
                    placeholder="Apt./Unit"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="city"
                    id="inputCity"
                    label="City"
                    placeholder="City"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col size="sm-1">
                  <Input
                    type="input"
                    name="state"
                    id="inputState"
                    label="State"
                    placeholder="State"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="zip"
                    id="inputZip"
                    label="Zip"
                    placeholder="Zip"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="phone"
                    id="inputPhone"
                    label="Phone Number"
                    placeholder="Phone Number"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="email"
                    id="inputEmail"
                    label="Email"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-2">
                  <BlueBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                  >Full Customer Details</BlueBtn>
                </Col>
              </div>
            </form>
            <h3 style={{ marginTop: 30 }}>Vehicle(s):</h3>
            <form>
              <div className="form-row">
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="make"
                    id="inputMake"
                    label="Make"
                    placeholder="Make"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="model"
                    id="inputModel"
                    label="Model"
                    placeholder="Model"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-1">
                  <Input
                    type="input"
                    name="year"
                    id="inputYear"
                    label="Year"
                    placeholder="Year"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-1">
                  <Input
                    type="input"
                    name="color"
                    id="inputColor"
                    label="Color"
                    placeholder="Color"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="plateNumber"
                    id="inputPlateNumber"
                    label="Plate Number"
                    placeholder="Plate Number"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="vin"
                    id="inputVin"
                    label="VIN"
                    placeholder="VIN"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Col>
              </div>
            </form>
          </Col>
          <Col size="md-1" />
        </Row>
      </Container>
    )
  };

}

export default Transaction;
