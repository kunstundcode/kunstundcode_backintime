import React, { Component } from "react";
import api from "../../api";

import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card
} from "reactstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: null
    };
  }
  handleSubmit = event => {
    event.preventDefault();
  };

  handleInputChange(stateFieldName, event) {
    this.setState({
      [stateFieldName]: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    api
      .login(this.state.username, this.state.password)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }));
  }

  render() {
    return (
      <Container className="signupLoginContainer">
        <Card className="cardlogin">
          <h2>Login and play around!</h2>
          <Form className="login" onSubmit={e => this.handleClick(e)}>
            <FormGroup>
              <Label for="username">Artist</Label>
              <Input
                type="text"
                value={this.state.username}
                onFocus={() => {
                  this.setState({
                    changeButton: true
                  });
                }}
                onBlur={() => {
                  this.setState({
                    changeButton: false
                  });
                }}
                onChange={e => this.handleInputChange("username", e)}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                value={this.state.password}
                onFocus={() => {
                  this.setState({
                    changeButton: true
                  });
                }}
                onBlur={() => {
                  this.setState({
                    changeButton: false
                  });
                }}
                onChange={e => this.handleInputChange("password", e)}
              />

              <Button
                className={`loginBtn ${
                  this.state.changeButton ? "btn-change" : "btn-secondary"
                }`}
              >
                Login
              </Button>
            </FormGroup>
            {this.state.message && (
              <div className="info info-danger">{this.state.message}</div>
            )}
          </Form>
        </Card>
      </Container>
    );
  }
}

/*
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
*/

/*
<Container>
        <Form>
          <h2>Admin</h2>
          <div className="result">{this.state.secret}</div>
          <FormGroup>
            <Label for="projectcode">Projectcode: </Label>
            <Input
              type="text"
              value={this.state.projectcode}
              name="projectcode"
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="thumbnail">Thumbnail: </Label>
            <Input
              type="text"
              value={this.state.thumbnail}
              name="thumbnail"
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="codeInput">Code: </Label>
            <Input
              type="textarea"
              value={this.state.code}
              name="code"
              cols="100"
              rows="10"
              onChange={this.handleInputChange}
            />
            <FormText color="muted">
              Lets try out a 100000 times if this shitty P5code is working in a
              react environment
            </FormText>
          </FormGroup>
          <Button onClick={e => this.handleClick(e)}>Create Codekunst</Button>
        </Form>
      </Container>
*/
