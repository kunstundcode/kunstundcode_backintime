import React from "react";
import { Col, Card, CardImg, CardBody, Button, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

const CardProfile = props => {
  return (
    <Col
      md={6}
      lg={4}
      style={{ marginLeft: `${props.rndm}px`, marginTop: `${props.rndm}px` }}
      // style={{ marginTop: `${props.rndm}px` }}
    >
      <Card className="cardProfile">
        {/* <CardHeader className="card-header xBox">Wo ist die card</CardHeader> */}
        <CardImg
          class="card-img-top img-fluid"
          src={props.c.pictureUrl}
          waves
        />
        <Button className="profileBtn">
          <Link to={"/codekuenste/" + props.c._codekunst._id}>
            {props.c._codekunst.projectcode}
          </Link>
        </Button>
      </Card>
    </Col>
  );
};

export default CardProfile;

/*--------ANDRES VERSION-----

import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBNavLink,
  MDBView,
  MDBCol
} from "mdbreact";

const CardProfile = props => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "12rem" }}>
        <MDBView hover zoom>
          <MDBCardImage className="img-fluid" src={props.c.pictureUrl} waves />
        </MDBView>
        <MDBCardBody>
          <MDBNavLink to={"/codekuenste/" + props.c._codekunst._id}>
            <MDBBtn>{props.c._codekunst.projectcode}</MDBBtn>
          </MDBNavLink>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CardProfile;
*/

/*MEINE CARD 
 <Col
      md={6}
      lg={4}
      style={{ marginLeft: `${props.rndm}px`, marginTop: `${props.rndm}px` }}
      // style={{ marginTop: `${props.rndm}px` }}
    >
      <Card className="card">
      <CardHeader className="card-header xBox">Wo ist die card</CardHeader> 
<CardImg
  class="card-img-top img-fluid"
  src={props.c.pictureUrl}
  waves
/>

  <CardBody>
    <Link to={"/codekuenste/" + props.c._codekunst._id}>
      <Button>{props.c._codekunst.projectcode}</Button>
    </Link>
  </CardBody>
      </Card >
    </Col >


*/
