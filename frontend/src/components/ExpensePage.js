import React from "react";
import Header from "./Header";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseList from "./ExpenseList";
import Footer from "./Footer";
import "../styles/Expenses.css";

function Expense() {
  return (
    <div className="expense">
      <Header />
      <div className="bcg">
        <ExpensePresentation />
        <ExpenseList type="expenses" />
      </div>

      <Footer />
    </div>
  );
}

export default Expense;
