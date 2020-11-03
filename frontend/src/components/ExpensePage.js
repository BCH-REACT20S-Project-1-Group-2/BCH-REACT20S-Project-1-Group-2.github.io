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
      <main>
        <ExpensePresentation />
        <ExpenseList />
      </main>
      <Footer />
    </div>
  );
}

export default Expense;
