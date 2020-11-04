import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Page.css";

function Page(props) {
  return (
    <div className="Page">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Page;
