import React, { Component } from "react";
class ShowItems extends Component {
  state = {};
  render() {
    let { items, resetItems } = this.props;
    console.log(items);
    return (
      <React.Fragment>
        <div style={{ border: "1px solid black" }}>
          <div className="row text-center">
            <div className="col-4">ID</div>
            <div className="col-4">Price</div>
            <div className="col-4">Date</div>
          </div>

          {items.map((m, index) => (
            <div key={index} className="row">
              <div className="col-4">{m.ID}</div>
              <div className="col-4">{m.PRICE}</div>
              <div className="col-4">{m.DATE}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => resetItems([])}
            className="btn btn-warning m-1"
          >
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ShowItems;
