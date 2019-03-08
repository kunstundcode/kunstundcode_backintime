import React, { Component } from "react";

import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardText
} from "reactstrap";
class ModalPage extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <Container className="modalBtn">
        <Button className="howToUseBtn" onClick={this.toggle}>
          How to use this... <i className="fas fa-question" />
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>How to use this... </ModalHeader>
          <ModalBody>
            <span>
              <p>{this.props.codekunst.description}</p>
            </span>
          </ModalBody>
          <ModalFooter>
            <Button className="OkBtn" onClick={this.toggle}>
              Great, thank you for the info
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;

{
  /* <Card className="card">
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
</Card>; */
}
