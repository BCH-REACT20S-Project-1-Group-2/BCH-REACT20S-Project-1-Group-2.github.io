import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";

const TransactionItem = (props) => {
  return (
    <Container as={Card.Body} className="p-2 mt-2 transactionContainer ">
      <Row className="d-flex justify-content-between align-items-center">
        <Col xs={7} className="pr-0">
          <p>{props.userexpense.title}</p>
        </Col>
        <Col className="px-0 d-flex justify-content-end">
          <p>{props.userexpense.amount} €</p>
        </Col>
        <Col className="d-flex justify-content-end">
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
