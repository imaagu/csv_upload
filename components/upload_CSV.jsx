import React, { Component } from "react";

import Papa from "papaparse";

class UploadFile extends Component {
  state = {
    data: { value: "" },
    path: "",
    items: [],
  };

  handleChange = (e) => {
    let data = this.state.data;
    data.value = e.currentTarget.files[0].name;

    const lines = e.currentTarget.files[0].name.split("/n");
    var path = (window.URL || window.webkitURL).createObjectURL(
      e.currentTarget.files[0]
    );
    this.setState({ path });
  };

  handleSubmit = async () => {
    let { data: file } = this.state;
    let { setItems } = this.props;
    if (
      file.value.substring(file.value.length - 4, file.value.length) === ".csv"
    ) {
      //   try {
      let items = [];
      Papa.parse(this.state.path, {
        header: true,
        download: true,

        complete: function (results) {
          results.data.pop();
          items = results.data;

          setItems(items);
        },
      });
      //  console.log(this.state.items);
    } else {
      alert("Please Choose Correct CSV File !!!");
    }
  };

  render() {
    return (
      <div style={{ border: "1px solid black" }}>
        <div className=" text-center">
          <br />
          <h4>Upload File</h4> <br />
          <div className="row">
            <div className="col-6 ">
              <label htmlFor="myfile">Select a File: &nbsp;&nbsp; </label>
            </div>
            <div className="col-6 text-left">
              <input
                onChange={this.handleChange}
                type="file"
                id="value"
                name="value"
              />
            </div>
          </div>
          <div className="row">
            <div className="col m-1 text-center">
              <button
                onClick={() => this.handleSubmit()}
                className="btn btn-warning m-1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadFile;
