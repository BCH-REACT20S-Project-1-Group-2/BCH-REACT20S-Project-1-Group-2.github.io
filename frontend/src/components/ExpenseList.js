import React from "react";
import {
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { FaSave } from "react-icons/fa";

class ExpenseList extends React.Component {
  render() {
    return (
      <div className="mt-3 p-3" style={{backgroundColor:"var(--light-font)"}}>
      <InputGroup >
        <Form.Control as="select" custom defaultValue="Add category">
          <option disabled>Add category</option>
          <option>Rent</option>
          <option>Mortgage(s)</option>
          <option>Utility Bills</option>
          <option>Insurance</option>
        </Form.Control>
        <FormControl
          placeholder="e.g. 100 €"
          className="text-center"
          type="number"
          step=".01"
        />
        <InputGroup.Append>
          <InputGroup.Text as={Button}>
            <FaSave />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      </div>
    );
  }
}

export default ExpenseList;
