import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";

 const AppHeader = (props) => {
   return (
     <Container className="mx-4">
       <Row className="d-flex align-items-center">
         <Col className="px-0 d-flex justify-content-start">
           <h1 id="logo">Logo</h1>
         </Col>
         <Col className="px-0 text-center">
           <h3 id="username">{props.username}</h3>
         </Col>
         <Col className="px-0 d-flex justify-content-end">
           <h3 id="userIcon">
             <FaUserEdit className="userIcon" />
           </h3>
         </Col>
       </Row>
     </Container>
   );
 };

 export default AppHeader;
