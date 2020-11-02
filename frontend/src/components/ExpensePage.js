import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Header from "./Header";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseList from "./ExpenseList";
import Footer from "./Footer";

function ExpensePage() {
  return (
    <>
      <Header />
      <ExpensePresentation />
      <Tabs defaultActiveKey="fixed" id="uncontrolled-tab-example">
        <Tab eventKey="fixed" title="Fixed Expense">
          <ExpenseList type="fixedExpenses" />
        </Tab>
        <Tab eventKey="irregular" title="Irregular Expense">
          <ExpenseList type="irregularExpenses" />
        </Tab>
      </Tabs>
      <Footer />
    </>
  );
}

export default ExpensePage;
