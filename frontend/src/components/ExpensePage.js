import React from "react";
import Header from "./Header";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseList from "./ExpenseList";
import Footer from "./Footer";
import "../styles/ExpensePage.css";

function Expense() {
  return (
    <div className="ExpensePage">
      <Header />
      <div className="main">
        <ExpensePresentation />
        <ExpenseList type="expenses" />
      </div>
      <Footer />
    </div>
  );
}

export default Expense;
