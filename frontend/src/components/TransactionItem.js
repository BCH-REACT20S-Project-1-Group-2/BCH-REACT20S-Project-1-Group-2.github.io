import React, { Component } from "react";
import PropTypes from "prop-types";

export class TransactionItem extends Component {
  render() {
    return (
      <div>
        <p style={{ backgroundColor: "#ffffff", margin: ".5rem 1rem" }}>
          <button
            onClick={this.props.delExpense.bind(
              this,
              this.props.userexpense.id,
              this.props.userexpense.amount
            )}
            style={btnstyle}
          >
            x
          </button>{" "}
          {"  "}
          {this.props.userexpense.title}
          <span style={{ float: "right" }}>
            {this.props.userexpense.amount}
          </span>
        </p>
      </div>
    );
  }
}

TransactionItem.propTypes = {
  userexpense: PropTypes.object.isRequired,
};

const btnstyle = {
  background: "#ff0000",
  color: "#ffffff",
  border: "none",
  padding: "5px 8px",
  cursor: "pointer",
};

export default TransactionItem;
