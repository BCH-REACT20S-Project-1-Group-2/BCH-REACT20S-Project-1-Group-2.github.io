import React from "react";
import Header from "./Header";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseList from "./ExpenseList";
import ExpenseItems from './ExpenseItems'
import Footer from "./Footer";
import "../styles/ExpensePage.css";

function ExpensePage() {
  return (
    <div className="ExpensePage">
      <Header />
      <main>
        <ExpensePresentation />
        <ExpenseList />
        <ExpenseItems/>
      </main>
      <Footer />
    </div>
  );
}

export default ExpensePage;
