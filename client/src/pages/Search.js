import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Radio, Input, FormBtn } from "../components/Form";

class Search extends React.Component {

  state = {
    searchType: "",
    firstName: "",
    lastName: "",
    phone: "",
    make: "",
    model: "",
    year: "",
    plateNumber: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", margin: "50px auto" }}>Search Database</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-1" />
          <Col size="md-10" style={{ marginBottom: "50px" }}>
            <h3>Search by:</h3>
            <form>
              <FormBtn
                type="submit"
                className="btn btn-block"
                onClick={this.handleSearch}
              >Search</FormBtn>
              <Radio
                name="searchType"
                id="customerRadio"
                value="customer"
                label="Customer"
                onClick={this.handleInputChange}
              />
              <Radio
                name="searchType"
                id="vehicleRadio"
                value="vehicle"
                label="Vehicle"
                onClick={this.handleInputChange}
              />
              <div className="form-row" style={{ marginTop: "30px" }}>
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="firstName"
                    id="inputFirstName"
                    label="First Name"
                    placeholder="First Name"
                    disabled={!(this.state.searchType === "customer")}
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="lastName"
                    id="inputLastName"
                    label="Last Name"
                    placeholder="Last Name"
                    disabled={!(this.state.searchType === "customer")}
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="phone"
                    id="inputPhone"
                    label="Phone Number"
                    placeholder="Phone Number"
                    disabled={!(this.state.searchType === "customer")}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </div>
              <div className="form-row" style={{ marginTop: "20px" }}>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="make"
                    id="inputMake"
                    label="Make"
                    placeholder="Make"
                    disabled={!(this.state.searchType === "vehicle")}
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="model"
                    id="inputModel"
                    label="Model"
                    placeholder="Model"
                    disabled={!(this.state.searchType === "vehicle")}
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="year"
                    id="inputYear"
                    label="Year"
                    placeholder="Year"
                    disabled={!(this.state.searchType === "vehicle")}
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="plateNumber"
                    id="inputPlateNumber"
                    label="Plate Number"
                    placeholder="Plate Number"
                    disabled={!(this.state.searchType === "vehicle")}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </div>
            </form>
          </Col>
          <Col size="md-1" />
        </Row>
      </Container >
    )
  };

}

export default Search;
