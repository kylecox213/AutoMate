import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, EditBtn, Radio } from "../components/Form";
class Report extends React.Component {

  state = {
    startDate: "",
    endDate: "",
    salesResolution: "",
    revenueResolution: "",
    blob: ""
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
            <h1 style={{ textAlign: "center", margin: "10px auto" }}>Generate Report</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-1" />
          <Col size="md-10" style={{ marginBottom: "50px" }}>
            <form>
              <h3 style={{ textAlign: "left", margin: "10px auto" }}>Date Range:</h3>
              <Row>
                <Col size="md-2" style={{ float: "left", marginBottom: "50px" }}>
                  <Input
                    type="input"
                    name="startDate"
                    id="inputStartDate"
                    label="Start Date"
                    placeholder="Start Date"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="md-2" style={{ float: "left", marginBottom: "50px" }}>
                  <Input
                    type="input"
                    name="endDate"
                    id="inputEndDate"
                    label="End Date"
                    placeholder="End Date"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="md-8" />
              </Row>
              <h3 style={{ textAlign: "left", margin: "10px auto" }}>Data Fields:</h3>
              <Row>
                <Col size="md-2" style={{ float: "left", marginBottom: "50px" }}>
                  <Radio
                    name="reportType"
                    id="reportRadio"
                    value="salesByDate"
                    label="By Date"
                    onClick={this.handleInputChange}
                  />
                </Col>
                <Col size="md-2" style={{ float: "left", marginBottom: "50px" }}>
                  <Radio
                    name="reportType"
                    id="reportRadio"
                    value="revenueByDate"
                    label="By Date"
                    onClick={this.handleInputChange}
                  />
                </Col>
                <Col size="md-8" />
              </Row>
            </form>
          </Col>
          <Col size="md-1" />
        </Row>
      </Container>
    )
  };
}

export default Report;