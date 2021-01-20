import React, { Component } from "react";
import UploadFile from "./upload_CSV";
import ShowItems from "./showItems";
class mainPage extends Component {
  state = {
    items: undefined,
  };

  setItems = (array) => {
    this.setState({ items: array });
  };
  resetItems = () => {
    this.setState({ items: undefined });
  };

  render() {
    return (
      <React.Fragment>
        <div className="text-center  " style={{ fontSize: 30 }}>
          75way Technologies PVT. LTD.
        </div>
        <div className="text-center  " style={{ fontSize: 20 }}>
          Assignment
        </div>
        <br />
        {!this.state.items ? (
          <div className="text-center">
            <UploadFile setItems={this.setItems} />
          </div>
        ) : (
          <div className="text-center">
            <ShowItems items={this.state.items} resetItems={this.resetItems} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default mainPage;
