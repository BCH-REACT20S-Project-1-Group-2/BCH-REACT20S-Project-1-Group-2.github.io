import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";

const TransactionItem = (props) => {
  return (
    <Container className="px-1 pt-3 transactionContainer ">
      <Row className="pb-1 ">
        <Col xs={7}>
          <p>{props.userexpense.title}</p>
        </Col>
        <Col xs={3}>
          <p>{props.userexpense.amount} €</p>
        </Col>
        <Col xs={2}>
          <Button
            onClick={() => {
              props.delExpense(props.userexpense.id, props.userexpense.amount);
            }}
          >
            <FaRegTrashAlt />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionItem;
