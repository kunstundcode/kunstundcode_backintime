import React from "react";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCol,
//   MDBView,
//   MDBNavLink
// } from "mdbreact";
import { Col, Card, CardHeader, CardImg, CardBody, CardText } from "reactstrap";

const CardDetail = props => {
  return (
    <Col>
      <Card className="card">
        <CardHeader className="card-header xBox">⊠</CardHeader>
        <CardImg
          class="card-img-top img-fluid"
          src={props.c.pictureUrl}
          alt="codekunstpicture"
        />
        <CardBody class="card-body">
          <CardText className="text-nowrap linkContainer">
            <a href={"/user/" + props.c._user._id}>{props.c._user.username}</a>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardDetail;

//====================ANDRE=============
/*

import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBView, MDBNavLink } from 'mdbreact';

const CardDetail = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "12rem" }}>
        <MDBView hover zoom>
          <MDBCardImage className="img-fluid" src={props.c.pictureUrl} waves />
        </MDBView>
        <MDBCardBody>
          <MDBNavLink to={"/user/"+ props.c._user._id}><MDBBtn>{props.c._user.username}</MDBBtn></MDBNavLink>
          
        </MDBCardBody >
      </MDBCard >
    </MDBCol >
  )
}

export default CardDetail;

*/
