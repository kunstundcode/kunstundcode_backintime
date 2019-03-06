import React, { Component } from "react";
import { Col, Card, CardHeader, CardImg, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const CardProject = props => {
  return (
    <Col md={6} lg={4}>
      <Card className="card">
        <CardHeader className="card-header xBox">⊠</CardHeader>
        <CardImg
          class="card-img-top img-fluid"
          src={props.c.thumbnail}
          alt="codekunstpicture"
        />
        <CardBody class="card-body">
          <CardText className="text-nowrap linkContainer">
            <Link to={"/codekuenste/" + props.c._id}>▬▬▬▬▬▬ Detail ▬▬▬▬▬⪢</Link>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardProject;
