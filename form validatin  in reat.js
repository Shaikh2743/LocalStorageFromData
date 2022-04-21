import React from "react";
const defaultState = {
  name: "",
  email: "",
  password: "",
  valueError: "",
  value1Error: "",
  value2Error: "",
  value3Error: ""
};

class FormValidationComponent extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  validate() {
    let valueError = "";
    let value1Error = "";
    let value2Error = "";
    let value3Error = "";
    if (!this.state.name) {
      valueError = "Name field is required";
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const reg1 = /^\w+([\@-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === "") {
      value1Error = "Email Field is Required ";
    } else if (reg.test(this.state.email) === false) {
      value1Error = "Email Entered is Invalid ";
    }
    if (!this.state.password) {
      value2Error = "Password field is required";
    }
    if (!this.state.number) {
      value3Error = "number field is required";
    }
    if (value1Error || valueError || value2Error || value3Error) {
      this.setState({ valueError, value1Error, value2Error, value3Error });
      return false;
    }

    return true;
  }
  submit() {
    if (this.validate()) {
      //Send back the form values to the parent i.e App.js
      this.props.onSubmit([this.state]);

      this.setState(defaultState);
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Name :</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  autoComplete="off"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.valueError}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email :</label>
                <input
                  type="email"
                  autoComplete="off"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.value1Error}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Password :</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.value2Error}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Number :</label>
                <input
                  type="phone"
                  autoComplete="off"
                  className="form-control"
                  name="number"
                  value={this.state.number}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.value3Error}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => this.submit()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormValidationComponent;
